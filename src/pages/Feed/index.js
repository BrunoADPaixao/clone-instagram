import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Post,
  Header,
  Avatar,
  Name,
  Description,
  Loading,
} from './styles';

// import avatar from '../../assets/avatar.jpg';
// import img1 from '../../assets/img3.jpg';
// import img2 from '../../assets/img2.jpg';

import FeedImage from '../../components/FeedImage';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefresh] = useState(false);

  async function loadPage() {
    setLoading(true);

    const { data } = await api.get('/feed?_expand=author');

    setLoading(false);

    setFeed(data);
  }

  useEffect(() => {
    loadPage();
  });

  async function refreshList() {
    setRefresh(true);

    await loadPage();

    setRefresh(false);
  }

  return (
    <Container>
      <FlatList
        key="list"
        data={feed}
        keyExtractor={(item) => String(item.id)}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>
            </Header>

            <FeedImage
              aspectRatio={item.aspectRatio}
              smallSource={{ uri: item.image }}
              source={{ uri: item.small }}
            />

            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </Container>
  );
}

import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Container, Text } from './styles';

const OrderPlaced: React.FC = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate('MainBottom', {
        screen: 'Dashboard',
      });
    }, 2000);
  }, [navigate]);

  return (
    <Container>
      <Icon name="thumbs-up" size={40} color="#39B100" />
      <Text>Pedido confirmado!</Text>
    </Container>
  );
};

export default OrderPlaced;

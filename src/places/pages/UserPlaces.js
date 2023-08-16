import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";


const DUMMY_PLACES = [
  {
    id: 'p1',
    title: '왕십리',
    description: '교통 좋음',
    imageUrl: 'https://www.sd.go.kr/site/tour/images/contents/cts1889_img3.jpg',
    address: '서울특별시 성동구',
    location: {
      lat: 37.561583,
      lng: 127.038417
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: '광화문',
    description: '뭐가 많음',
    imageUrl: 'https://i.namu.wiki/i/hIBbbdByyQmvWd8l6SLuJJS9aCfLJWXl_jSBk3jnodgry6lJV20NM7hAdnlky4324Z89W56IalWypBH3DAMXxg.webp',
    address: '서울특별시 종로구',
    location: {
      lat: 33.76,
      lng: 37.27
    },
    creator: 'u2'
  },
]

const UserPlaces = () => {
  const { userId } = useParams(); // 안되면 useParamas().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <div>
    <PlaceList items={loadedPlaces} />
  </div>
};

export default UserPlaces;
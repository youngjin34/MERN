import { useParams } from "react-router-dom";

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import './PlaceForm.css';

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>장소가 없습니다!</h2>
      </div>
    );
  }

  return <form className="place-form">
    <Input
      id='title'
      element='input'
      type='text'
      label='Title'
      validators={[VALIDATOR_REQUIRE()]}
      errorText='제목을 입력해주세요'
      onInput={() => { }}
      value={identifiedPlace.title}
      valid={true}
    />
    <Input
      id='description'
      element='textarea'
      label='Description'
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText='5글자 이상의 내용을 입력해주세요'
      onInput={() => { }}
      value={identifiedPlace.description}
      valid={true}
    />
    <Button type='submit' disabled={true}>장소 수정</Button>
  </form>
};

export default UpdatePlace;
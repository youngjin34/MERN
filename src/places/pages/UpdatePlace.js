import { useParams } from "react-router-dom";

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

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

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true
      },
      description: {
        value: identifiedPlace.description,
        isValid: true
      }
    }, true)

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>장소가 없습니다!</h2>
      </div>
    );
  }

  return <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
    <Input
      id="title"
      element="input"
      type="text"
      label="Title"
      validators={[VALIDATOR_REQUIRE()]}
      errorText="제목을 입력해주세요"
      onInput={inputHandler}
      initialValue={formState.inputs.title.value}
      initialValid={formState.inputs.title.isValid}
    />
    <Input
      id="description"
      element="textarea"
      label="Description"
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText="5글자 이상의 내용을 입력해주세요."
      onInput={inputHandler}
      initialValue={formState.inputs.description.value}
      initialValid={formState.inputs.description.isValid}
    />
    <Button type="submit" disabled={!formState.isValid}>
      장소 수정
    </Button>
  </form>
};

export default UpdatePlace;
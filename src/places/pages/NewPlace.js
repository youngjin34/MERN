import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <div>
      <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input
          id='title'
          element='input'
          type='text'
          label='제목'
          validators={[VALIDATOR_REQUIRE()]}
          errorText="제목을 입력하세요"
          onInput={inputHandler}
        />
        <Input
          id='description'
          element='textarea'
          type='text'
          label='내용'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="5글자 이상의 내용을 적어주세요"
          onInput={inputHandler}
        />
        <Input
          id='address'
          element='input'
          type='text'
          label='주소'
          validators={[VALIDATOR_REQUIRE()]}
          errorText="주소를 입력하세요"
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!formState.isValid}>
          장소 추가
        </Button>
      </form>
    </div>
  );
};

export default NewPlace;
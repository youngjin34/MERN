import { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './PlaceForm.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  }

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
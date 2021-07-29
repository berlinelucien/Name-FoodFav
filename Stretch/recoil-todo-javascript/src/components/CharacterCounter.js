import { useRecoilState, useRecoilValue, selector, atom } from 'recoil';

function CharacterCounter() {
    return (
      <div>
        <TextInput />
        <CharacterCount />
      </div>
    );
  }
  
  const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
  
  function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const onChangeText = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        Enter some text:
        <br></br>
        <input type="text" value={text} onChange={onChangeText} />
        <br />
        Echo: {text}
      </div>
    );
  }
  
  const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(textState);
      return text.length;
    },
  });
  
  function CharacterCount() {
    const count = useRecoilValue(charCountState);
    return (
      <div>
        Character Count: {count}
      </div>
    )
  }
  
  export default CharacterCounter;
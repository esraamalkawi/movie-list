import { Center, ThemeButton, Buttons } from "./Styles";

const Home = (props) => {
  return (
    <Center>
      <h1> guessing game </h1>
      <h4> Let's do some mental things </h4>
      <Buttons
        type="text"
        onChange={(event) => props.setUserNum(event.target.value)}
      />
      <ThemeButton
        onClick={() => {
          props.comparing();
        }}
        type="submit"
      >
        {" "}
        Enter
      </ThemeButton>
      <ThemeButton onClick={() => window.location.reload()}>
        play again
      </ThemeButton>
    </Center>
  );
};

export default Home;

const Heading = (props) => {
  return <h1>제목은 {props.text}</h1>;
};

const Paragraphy = (props) => {
  return <p>내용은 {props.text}</p>;
};

const Section = (props) => {
  return (
    <>
      <Heading text={props.title} />
      <Paragraphy text={props.content} />
    </>
  );
};

export default Section;

import { useRef, useState } from "react";

const PcHooksInput = () => {
  const name = useRef(null);
  const job = useRef(null);
  const dpName = useRef(null);
  const dpAddr = useRef(null);
  const email = useRef(null);
  const tel = useRef(null);

  const [isClick, setIsClick] = useState(false);
  const [member, setMember] = useState(null);

  const submit = () => {
    setIsClick(true);

    const newMember = {
      name: name.current.value,
      job: job.current.value,
      dpName: dpName.current.value,
      dpAddr: dpAddr.current.value,
      email: email.current.value,
      tel: tel.current.value,
    };

    setMember(newMember);
  };

  return (
    <>
      <input type="text" placeholder="이름" ref={name} />
      <input type="text" placeholder="직책" ref={job} />
      <input type="text" placeholder="회사명" ref={dpName} />
      <input type="text" placeholder="회사주소" ref={dpAddr} />
      <input type="text" placeholder="이메일" ref={email} />
      <input type="text" placeholder="전화번호" ref={tel} />
      <button onClick={submit}>제출</button>
      <div>{isClick && <PcHooks {...member} />}</div>
    </>
  );
};

const PcHooks = (props) => {
  return (
    <>
      <p>이름 : {props.name}</p>
      <p>직책 : {props.job}</p>
      <p>회사명 : {props.dpName}</p>
      <p>회사주소 : {props.dpAddr}</p>
      <p>이메일 : {props.email}</p>
      <p>전화번호 : {props.tel}</p>
    </>
  );
};

export default PcHooksInput;

import React from "react";
import qs from "qs";

const About = ({ location }) => {
  console.log(location);
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const detail = query.detail === "true";

  console.log(query);
  console.log(detail);
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
    </div>
  );
};

export default About;

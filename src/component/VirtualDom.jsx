import React from "react";

const VirtualDom = () => {
  return (
    <div>
      <h4>React 가상돔 설명</h4>
      <h5>DOM</h5>
      <p>Document Object Model</p>
      <p>
        DOM은 Elements 요소들의 묶음이며, DOM조작을 통해 내가 원하는 element들을
        입맛대로 조작할 수 있다
      </p>
      <p>가상(Virtual)DOM은 실제 돔의 복사본이라고 생각하면 된다.</p>
      <p>
        가상돔은 실제 돔과 다르게 브라우저에 직접적으로 적용할 수 없다. 그래서
        react는 가상돔을 사용하여 비효율적인 DOM조작을 효율적으로 구성하게 된다
      </p>
      <p>그리고 가상돔은 메모리에 저장된 react의 Javascript에 불가하다</p>
      <p>react는 두개의 가상돔을 가지고 있다.</p>
      <p>첫번째는 렌더링 이전의 화면 구조를 나타내는 가상돔이다</p>
      <p>두번째는 렌더링 이후의 보이게 될 화면 구조이다</p>
      <p>react의 재조정이 효율적인 이유는 Batch Update때문이다</p>
      <p>Batch Update는 변경된 집단(무리)을 한번에 실제 돔에 적용되게 한다</p>
      <p>
        즉, 10번 변경된다고 해서 실제 돔을 10번 그리는 것이 아니라 변경된 내용을
        한번에 받아서 실제 돔에 한번 적용되게 하여 속도를 개선하게 한다
      </p>
      <hr />
    </div>
  );
};

export default VirtualDom;

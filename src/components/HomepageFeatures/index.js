import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "쉬운 사용법",
    description: (
      <>
        CM2는 사용하기 쉽게 설계되었습니다. 자세한 문서와 예제를 통해 빠르게
        시작할 수 있습니다.
      </>
    ),
  },
  {
    title: "강력한 기능",
    description: (
      <>
        다양한 기능을 제공하여 프로젝트의 요구사항을 효과적으로 해결할 수
        있습니다.
      </>
    ),
  },
  {
    title: "커뮤니티 중심",
    description: (
      <>
        활발한 커뮤니티를 통해 도움을 받고, 프로젝트의 발전에 기여할 수
        있습니다.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

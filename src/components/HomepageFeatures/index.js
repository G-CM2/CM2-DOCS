import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "가벼운 Docker 오케스트레이션",
    description: (
      <>
        Kubernetes보다 간단한 설정과 낮은 리소스 사용량으로 컨테이너를
        효율적으로 관리할 수 있습니다. 로컬 환경 및 IoT 기기에서도 원활하게
        작동합니다.
      </>
    ),
  },
  {
    title: "헬스 모니터링 및 자동 복구",
    description: (
      <>
        컨테이너 상태를 실시간으로 감지하고, 장애 발생 시 자동으로 복구합니다.
        장애 발생 시 대체 컨테이너를 자동으로 생성하고 재배포합니다.
      </>
    ),
  },
  {
    title: "직관적인 대시보드",
    description: (
      <>
        컨테이너 상태를 한눈에 확인할 수 있는 웹 기반 UI를 제공하며, 간편한
        컨테이너 배포 및 모니터링을 지원합니다.
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

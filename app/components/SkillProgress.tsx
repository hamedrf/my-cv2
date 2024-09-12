"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProgressBar } from "react-bootstrap";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useInView } from "react-intersection-observer";
interface SkillProgressProps {
  icon?: IconProp;
  progress: number;
  color?: string;
  svg?: React.ReactNode;
}

const SkillProgress: React.FC<SkillProgressProps> = ({
  icon,
  progress,
  color,
  svg = null,
}) => {
  const [progressEffect, setProgressEffect] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = 1;
      const interval = setInterval(() => {
        start += increment;
        if (start >= progress) {
          start = progress;
          clearInterval(interval);
        }
        setProgressEffect(Math.floor(start));
      }, 15);
    }
  }, [inView, progress]);
  return (
    <div
      className="mt-2 row skill-progress d-flex justify-content-around align-items-center ps-lg-5"
      ref={ref}
    >
      <ProgressBar className="skill-progress-bar col-10 p-0 ">
        <div
          className="text-center"
          style={{
            width: `${progressEffect}%`,
          }}
        >
          {" "}
          {progressEffect}%
        </div>
      </ProgressBar>
      {svg === null ? (
        <FontAwesomeIcon
          icon={icon!}
          className="progress-bar-icon"
          style={{ color: color }}
        />
      ) : (
        svg
      )}
    </div>
  );
};

export default SkillProgress;

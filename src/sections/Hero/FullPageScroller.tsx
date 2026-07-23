import React, { useState, useEffect, useCallback } from "react";
import { Scrollama, Step } from "react-scrollama";
import styled, { css } from "styled-components";

import { ScrollComponent } from "../../constants";

interface StepContainerProps {
  index: number;
  totalSteps: number;
}

const FullPageScroller: React.FC<{
  Background: ScrollComponent;
  children: React.ReactNode;
}> = ({ Background, children }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showStepContainer, setShowStepContainer] = useState(false);

  const steps = React.Children.toArray(children);

  const onStepEnter = useCallback(({ data }: { data: number }) => {
    setCurrentStepIndex(data);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowStepContainer(true);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Wrapper>
      <BackgroundContainer>
        <FluidContainer>
          <Background currentStepIndex={currentStepIndex} />
        </FluidContainer>
      </BackgroundContainer>

      <Scrollama offset={0.65} onStepEnter={onStepEnter}>
        {steps.map((step, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <StepContainer
              index={stepIndex}
              totalSteps={steps.length}
              style={{
                opacity: currentStepIndex === stepIndex ? 1 : 0.25,
                visibility: showStepContainer ? "visible" : "hidden",
              }}
            >
              {step}
            </StepContainer>
          </Step>
        ))}
      </Scrollama>
    </Wrapper>
  );
};

export default FullPageScroller;

const Wrapper = styled.div`
  margin-bottom: 250px;
`;

const FluidContainer = styled.div`
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 0;
  pointer-events: none;

  margin-bottom: 50px;
`;

const StepContainer = styled.div<StepContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 50px;
  padding-right: 50px;

  transition: opacity 0.25s ease-out;
  will-change: opacity;

  ${({ index, totalSteps }) => css`
    padding-top: ${index === 0 ? 0 : "min(12vh, 120px)"};
    padding-bottom: min(12vh, 120px);
    min-height: ${index === totalSteps - 1 ? "95vh" : "75vh"};
  `}
`;

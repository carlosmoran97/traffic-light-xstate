import { useMachine } from "@xstate/react";
import React from "react";
import { trafficMachine } from "../../machines/trafficMachine";
import { mapTrafficStateToLightState } from "../../utils/mapTraffictStateToLightState";
import { Light } from "../Light";
import "./TrafficLight.css";

export const TrafficLight = () => {
  const [trafficState, onTransition] = useMachine(trafficMachine);

  const {
    redState,
    yellowState,
    greenState
  } = mapTrafficStateToLightState(trafficState);

  const onClick = () => {
    onTransition("TRANSITION");
  };

  return (
    <div>
      <div className="traffic-light">
        <div className="protector" />
        <div className="protector" />
        <div className="protector" />
        <Light color="red" state={redState} />
        <Light color="yellow" state={yellowState} />
        <Light color="#1aff1a" state={greenState} />
      </div>
      <button className="button" onClick={onClick}>Transition</button>
    </div>
  );
};

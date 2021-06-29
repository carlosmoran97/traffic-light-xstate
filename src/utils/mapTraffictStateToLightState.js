export const mapTrafficStateToLightState = (trafficState) => {
  const { value } = trafficState;
  return {
    redState : value === 'stopped' ? 'on' : 'off',
    yellowState: value === 'stopping' ? 'on' : 'off',
    greenState: value === 'flowing' ? 'on' : 'off',
  };
}

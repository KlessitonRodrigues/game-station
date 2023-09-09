export const RoundedIcon = (props: App.Props.RoundedIcon) => {
  const { content } = props;

  return (
    <div style={{ display: 'block', width: '1.8rem' }}>
      <svg width="100%" height="100%" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <circle
          id="Oval"
          fill="none"
          cx="31"
          cy="31"
          r="27.841"
          style={{ strokeWidth: '4px', stroke: '#999' }}
          transform="matrix(0.910153, 0, 0, 0.89304, 3.448403, 3.713665)"
        />
        <text
          style={{
            fill: '#DDD',
            fontFamily: 'FreeSans',
            fontSize: '32.4528px',
            fontWeight: 'bold',
            whiteSpace: 'pre',
          }}
          transform="matrix(1.478571, 0, 0, 1.232558, -10.114382, -9.312138"
          x="19.5"
          y="44"
        >
          {content}
        </text>
      </svg>
    </div>
  );
};

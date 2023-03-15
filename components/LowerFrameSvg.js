// need to convert regular svg into jsx

const LowerFrameSvg = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 79.375 26.458"
    >
      <g transform="translate(0 -92.604)">
        <path
          fill={color}
          strokeWidth="0.265"
          d="M0 92.604V119.063h79.375V92.604H68.93a9.399 9.399 0 00-8.921 6.443c-2.037 3.033-8.294 5.642-16.384 6.786H35.75c-8.09-1.144-14.347-3.753-16.384-6.786a9.399 9.399 0 00-8.921-6.443z"
        ></path>
      </g>
    </svg>
  );
};

export default LowerFrameSvg;

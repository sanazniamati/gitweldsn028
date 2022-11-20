import {
  Stage,
  Layer,
  Line,
  Group,
  Image,
  Text,
  Arrow,
  Shape,
} from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";

export default function App() {
  const url = "img.gif";
  const [image] = useImage(url);
  const stageRef = useRef();
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handelMouseOut}
    >
      <Layer>
        <Group>
          {/*<Image x={100} y={10} image={image} />*/}
          <Text text={text} x={10} y={50} fontSize={20} />
        </Group>
        <Line stroke={"green"} strokeWidth={2} points={[378, 73, 378, 17]} />
        <Text x={420} y={21} text={"t2"} fontSize={40} />

        <Arrow
          points={[380, 17, 492, 17]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          pointerAtEnding={true}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Line stroke={"green"} strokeWidth={2} points={[494, 73, 494, 17]} />

        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(378, 73);
            context.lineTo(430, 73);
            context.lineTo(433, 89);
            context.lineTo(439, 54);
            context.lineTo(442, 73);
            context.lineTo(494, 73);
            context.lineTo(494, 612);
            context.lineTo(442, 612);
            context.lineTo(439, 596);
            context.lineTo(433, 628);
            context.lineTo(430, 612);
            context.lineTo(378, 612);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="lightgrey"
          stroke="red"
          strokeWidth={3}
        />
        <Line stroke={"green"} strokeWidth={2} points={[494, 612, 494, 679]} />
        <Text x={500} y={643} text={"b"} fontSize={40} />

        <Arrow
          points={[496, 679, 522, 679]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          pointerAtEnding={true}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Line stroke={"green"} strokeWidth={2} points={[524, 612, 524, 679]} />

        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(525, 612);
            context.lineTo(526, 426);
            context.quadraticCurveTo(552, 290, 683, 269);
            context.lineTo(817, 266);
            context.lineTo(817, 334);
            context.lineTo(803, 338);
            context.lineTo(832, 346);
            context.lineTo(816, 349);
            context.lineTo(816, 420);
            context.lineTo(706, 420);
            context.quadraticCurveTo(685, 426, 679, 447);
            context.lineTo(679, 612);
            context.lineTo(608, 612);
            context.lineTo(605, 632);
            context.lineTo(597, 592);
            context.lineTo(592, 612);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="lightgrey"
          stroke="red"
          strokeWidth={3}
        />
        <Line stroke={"green"} strokeWidth={2} points={[817, 266, 876, 266]} />
        <Text x={840} y={330} text={"t1"} fontSize={40} />
        <Arrow
          points={[876, 268, 876, 417]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          pointerAtEnding={true}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Line stroke={"green"} strokeWidth={2} points={[817, 419, 876, 419]} />
        {/*    R */}
        <Text x={555} y={139} text={"R"} fontSize={40} />

        <Arrow
          points={[566, 173, 566, 326]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtEnding={true}
          stroke={"blue"}
          strokeWidth={3}
        />
      </Layer>
    </Stage>
  );
}

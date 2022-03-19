import { DownOutlined } from "@ant-design/icons";

function MainMenu(props) {
  return (
    <li className="inline-flex items-center">
      {props.title}
      {props.icon && <DownOutlined className="text-xs text-green-500 ml-1.5"/>}
    </li>
  );
}

export default MainMenu;

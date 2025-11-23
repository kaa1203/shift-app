import { LuCross, LuPlus, LuX } from "react-icons/lu";
import {
  Image,
  ImageInput,
  ImageLabel,
  ImageContainer,
  ImageWrapper,
  IconWrapper,
} from "../App.styled";
import { handleImageUpload } from "../../utils/handleImageUpload";

const ImageGroup = ({ images, setImages }) => {
  if (images.length === 0) return;

  const handleOnClick = (idx) => {
    setImages((prevState) => prevState.filter((_, id) => id !== idx));
  };

  return (
    <ImageContainer>
      {images.length !== 0 && (
        <ImageLabel>
          <LuPlus size={36} />
          <ImageInput
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleImageUpload(e, setImages)}
          />
        </ImageLabel>
      )}
      {images.map((src, idx) => (
        <ImageWrapper key={idx}>
          <IconWrapper onClick={() => handleOnClick(idx)}>
            <LuX size={20} />
          </IconWrapper>
          <Image src={src} alt="image" />
        </ImageWrapper>
      ))}
    </ImageContainer>
  );
};

export default ImageGroup;

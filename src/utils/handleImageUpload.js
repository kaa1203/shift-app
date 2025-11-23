export const handleImageUpload = async (e, setImages) => {
  const files = Array.from(e.target.files);

  const filteredFiles = files.filter((file) =>
    ["image/jpeg", "image/png", "image/webp"].includes(file.type)
  );

  if (filteredFiles.length !== files.length) return console.log("images only!");

  const readAsDataUrl = (file) =>
    new Promise((res) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.readAsDataURL(file);
    });

  const images = await Promise.all(
    filteredFiles.map((file) => readAsDataUrl(file))
  );
  setImages((prevState) => [...prevState, ...images]);
};

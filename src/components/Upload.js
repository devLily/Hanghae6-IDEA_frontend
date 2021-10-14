import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./elements/Button";
import { storage } from "../Shared/firebase";

import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const dispatch = useDispatch();

  // const uploading = useSelector((state) => state.image.uploading);
  const uploading = false;

  const fileInput = React.useRef();

  const selectFile = (e) => {
    // console.log(e.target.files);
    // console.log(e.target.files[0]);
    // console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = e.target.files[0];

    // console.log(reader.result);

    // 파일 내용을 읽어옵니다.
    reader.readAsDataURL(file);

    // 읽기가 끝나면 발생하는 이벤트 핸들러예요! :)
    reader.onloadend = () => {
      // reader.result는 파일의 컨텐츠(내용물)입니다!
      const imagePreview = reader.result;
      // console.log(imagePreview);

      // Firebase Storage에 저장된 이미지 URL 가져오기
      getImageURL();

      dispatch(imageActions.setPreview(imagePreview));
    };
  };

  const getImageURL = () => {
    let image = fileInput.current?.files[0];
    const _upload = storage
      .ref(`images/${image.name.split(".")[0]}_${new Date().getTime()}`)
      .put(image);

    // 업로드!
    _upload.then((snapshot) => {
      // console.log(snapshot);

      // 업로드한 파일의 다운로드 경로를 가져오자!
      snapshot.ref.getDownloadURL().then((url) => {
        const imageURL = url;
        console.log(imageURL);
        dispatch(imageActions.getImageURL(imageURL));
      });
    });
  };

  return (
    <React.Fragment>
      <input
        type="file"
        ref={fileInput}
        onChange={selectFile}
        disabled={uploading}
      />
    </React.Fragment>
  );
};

export default Upload;

import React, { useImperativeHandle, useState } from "react";
import { Col, Modal, Row } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";

const InfoModal = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false),
    [error, setError] = useState(false),
    hideModal = () => {
      setVisible(false);
    };

  useImperativeHandle(ref, () => ({
    showModal: () => setVisible(true),
    hideModal: () => setVisible(false),
    openErrorModal: () => setError(true)
  }));

  return (
    <Modal open={visible} onCancel={hideModal} footer={null} className={`${error ? "error" : ""}`} destroyOnClose={true}>
      <Row justify="center" align="center" gutter={20}>
        <Col><InfoCircleOutlined /></Col>
        <Col>
          <p>
            <FormattedMessage id={error ? "label.fomSubmitFailed" : "label.formSubmitted"} />
          </p>
        </Col>
      </Row>
    </Modal>
  );
});

export default InfoModal;

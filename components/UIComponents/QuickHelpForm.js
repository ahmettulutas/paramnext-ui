import React, { useRef, useState } from "react";
import { Row, Col, Typography, Form, Button, Spin } from "antd";
import { FormattedMessage } from "react-intl";
import { Input, Textarea } from "@/components/UIKit";
import RightIcon from "@/assets/images/right-icon.svg";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";
import InfoModal from "@/components/UIComponents/InfoModal";
import { emailValidator, phoneValidator } from "@/lib/helpers";


const QuickHelpForm = ({ rowCount = 5, hasPhone, hasEmail=true }) => {
  const [loading, setLoading] = useState(false),
    modalRef = useRef(),
    [form] = Form.useForm(),
    handleFinish = async values => {
      try {
        setLoading(true);
        await emailjs.send(
          process.env.EMAILJS_FORM_SERVICE_ID, process.env.EMAILJS_FORM_TEMPLATE_ID, values, process.env.EMAILJS_FORM_PUBLIC_KEY
        );
        form.resetFields();
        setLoading(false);
        modalRef.current.showModal();
      }
      catch (error) {
        modalRef.current.openErrorModal();
      }

    };
  return (

    <div className="form">
      <div>
        <Form form={form} name="quickHelp" autoComplete="off" onFinish={handleFinish}>

          <div className="mb-32">
            <Typography.Title level={4} className="m-0">
              <FormattedMessage id="label.tellusYourNeed" />
            </Typography.Title>
          </div>

          <Form.Item
            name="from_name"
            rules={[{ required: true, message: <FormattedMessage id="label.nameSurnameRequired" /> }]}
          >
            <Input label={<FormattedMessage id="label.nameSurname" />} />
          </Form.Item>
          { hasEmail ?
            <Form.Item
              name="reply_to"
              rules={[{ required: true, message: <FormattedMessage id="label.emailRequired" />, validator: (rule, value, callback) => emailValidator(value) ? callback(): callback(true) }]}
            >

              <Input label={<FormattedMessage id="label.email" />} />
            </Form.Item>
            : undefined
          }
          { hasPhone ?
            <Form.Item
              name="phone_number"
              rules={[{ required: true, message: <FormattedMessage id="label.invalidPhoneNumber" />, validator: (rule, value, callback) => phoneValidator(value) ? callback(true): callback() }]}
            >
              <Input label={<FormattedMessage id="label.mobileNumber" />} type="number" />
            </Form.Item>
            : undefined
          }

          <Form.Item name="product">
            <Input label={<FormattedMessage id="label.whichProductInterested" />} />
          </Form.Item>

          <Form.Item name="comment">
            <Textarea label={<FormattedMessage id="label.comment" />} rows={rowCount} />
          </Form.Item>

          <Row>
            <Col className="ml-auto" xs={{ span: 18, offset: 4 }} sm={{ span: 16, offset: 4 }} md={{ span: 12, offset: 9 }} lg={{ span: 18, offset: 9 }} xl={16} xxl={{ span: 12, offset: 9 }}>
              <Form.Item>
                <Button disabled={loading} type="primary" htmlType="submit" className="with-icon block ml-auto mt-8">
                  {
                    loading
                      ?
                      <div style={{ margin: "auto" }}>
                        <Spin />
                      </div>
                      :
                      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <FormattedMessage id="button.send" />
                        <RightIcon />
                      </div>
                  }
                </Button>
              </Form.Item>
            </Col>

          </Row>

        </Form>
        <InfoModal ref={modalRef}/>
      </div>
    </div>


  );
};
QuickHelpForm.propTypes = {
  rowCount: PropTypes.number,
  hasPhoneEmail: PropTypes.bool
};

export default QuickHelpForm;

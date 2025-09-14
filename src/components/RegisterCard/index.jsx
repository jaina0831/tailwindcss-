import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";

import { useRegisterWithEmailPassword } from "../../react-query";
import styles from "./registercard.module.css"
import Title from "../Title";

const RegisterCard = ({ redirect }) => {

  const { mutate, error, isLoading, isError, isSuccess, data } = useRegisterWithEmailPassword();
  const [isClicked, setClicked] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
    }
  }, [isSuccess, redirect]);

  const OnSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <Title title={"註冊帳戶"} />
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        className={styles.registerForm}
        scrollToFirstError
      >
       <Form.Item
        name="name"
        label="你的名字"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "請輸入您的名字!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="電子郵件"
        rules={[
          {
            type: "email",
            message: "請輸入正確的格式!",
          },
          {
            required: true,
            message: "請輸入您的電子郵件!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密碼"
        rules={[
          {
            required: true,
            message: "請輸入您的密碼!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="確認密碼"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "請再次輸入您的密碼!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        
        <Checkbox>
        <p className={styles.loginForm__or}>
          我以閱讀並瞭解 <Link className={styles.loginForm__read} to={"/"}>服務條款</Link>及<Link className={styles.loginForm__read} to={"/"}>隱私權聲明</Link>。
          </p>
          </Checkbox>
      </Form.Item>
      <Form.Item>
        {isLoading ? (
          <Button
            type="primary"
            className={styles.loginForm__button}
            htmlType="submit"
            loading
          >
          註冊帳號
          </Button>
          
        ) : (
          <Button
            type="primary"
            className={styles.loginForm__button}
            htmlType="submit"
          >
            註冊帳戶
          </Button>
        )}
        < div className={styles.yes}>
        已經擁有帳戶?{" "}
        <Link className={styles.loginForm__read} to={`/auth/login?redirect=${redirect}`}>登入</Link>
        </div>
        {!isError ? (
          <></>
        ) : (
          <div className={styles.loginForm__errorWrap}>
            <h3 className={styles.loginForm__errorTitle}>
              <WarningOutlined  />
              {"  "}發現問題
            </h3>
            <p className={styles.loginForm__errorMessage}>{error.message}</p>
          </div>
        )}
      </Form.Item>
    </Form>
    </>
  );
};
export default RegisterCard;

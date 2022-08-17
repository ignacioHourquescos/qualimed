import React, { useState, useEffect } from "react";
import { Collapse } from "antd";
import styles from "./Filter.module.scss";
import Link from "next/link";
import { Form, Input, Button, Row } from "antd";
import { SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
const { Search } = Input;

const Filter = ({
  brands,
  brandClickHandler,
  lookUpValueHandler,
  resetValues,
  changeToAllProducts,
}) => {
  const [form] = Form.useForm();
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [state, setState] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { Search } = Input;
  const [show, setShow] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

  useEffect(() => {
    if (isDesktop) {
      setShow(true);
    }
  }, []);

  function handleChangeToAllProducts() {
    if (!isDesktop) {
      changeToAllProducts();
      closeFilter();
    }
    changeToAllProducts();
  }

  function clearProducts() {
    if (!isDesktop) {
      resetValues();
      closeFilter();
    }
    resetValues();
  }
  function filterBrand(e) {
    if (!isDesktop) {
      brandClickHandler(e);
      closeFilter();
    }
    brandClickHandler(e);
  }

  function callback(key) {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  function colorice(key1) {
    setState(!state);
  }

  const showFilter = () => {
    setShow(true);
  };
  const closeFilter = () => {
    setShow(false);
  };

  const { Panel } = Collapse;

  const onFinish = async (values) => {
    try {
      setSubmitting(true);
      lookUpValueHandler(values.name);
    } finally {
      setSubmitting(false);
    }
  };

  const withoutDuplicates = [...new Set(brands)];

  return (
    <>
      <div
        className={styles.filter}
        style={{ display: show ? "flex" : "none" }}
      >
        <div className={styles.categories}>
          <div className={styles.close} onClick={() => closeFilter()}>
            {closeIcon}
          </div>

          <Form
            form={form}
            name="name"
            layout="vertical"
            onFinish={onFinish}
            role="search"
          >
            <h3>Buscador</h3>
            <Row>
              <Form.Item
                role="search"
                name="name"
                rules={[
                  {
                    max: 50,
                    message: "Maximo 50 caracteres",
                  },
                ]}
              >
                <Search
                  allowClear
                  role="searchbox"
                  aria-label="Busca cualquier producto"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={submitting}
                  role="search"
                  className={styles.sendButton}
                >
                  Buscar
                </Button>
              </Form.Item>
            </Row>
          </Form>

          <h3>Categorías</h3>
          <Collapse onChange={callback} ghost expandIconPosition="right">
            <Panel
              className={styles.categoryPanel}
              showArrow={true}
              header={
                <>
                  <img src="/ventilatorIcon.png" alt="insumos medicos" />
                  <a
                    style={{
                      color: sideDrawerOpen ? "#3E4095" : "#595858",
                      fontWeight: "700",
                    }}
                  >
                    Equipamiento
                  </a>
                </>
              }
              key="1"
            >
              <Link href="/products/equipamiento" passHref>
                <li onClick={() => handleChangeToAllProducts()}>Todos</li>
              </Link>
              <Link href="/products/equipamientoVenta" passHref>
                <li onClick={() => clearProducts()}>Venta</li>
              </Link>
              <Link href="/products/equipamientoAlquiler" passHref>
                <li onClick={() => clearProducts()}>Alquileres</li>
              </Link>
              <Link href="/products/equipamientoServicioTecnico" passHref>
                <li onClick={() => clearProducts()}>Servicio técnico</li>
              </Link>
            </Panel>
            <ul className={styles.categoryBox}>
              <li className={styles.category}>
                <img src="/maskIcon.png" alt="insumos medicos" />
                <div>
                  <Link href="/products/insumosMedicos" passHref>
                    <a onClick={() => clearProducts()}>Insumos médicos</a>
                  </Link>
                </div>
              </li>
              <li className={styles.category}>
                <img src="/bandageIcon.png" alt="insumos medicos" />
                <div>
                  <Link href="/products/medicinaDeportiva" passHref>
                    <a onClick={() => clearProducts()}>Medicina deportiva</a>
                  </Link>
                </div>
              </li>
            </ul>
          </Collapse>
          <Collapse
            onChange={colorice}
            ghost
            defaultActiveKey={["1"]}
            expandIconPosition="right"
          >
            <Panel
              className={styles.categoryPanel}
              showArrow={true}
              header={
                <>
                  <a
                    className={styles.marcas}
                    style={{
                      color: state ? "#595858" : "#3E4095",
                      fontWeight: "700",
                    }}
                  >
                    Marcas
                  </a>
                </>
              }
              key="1"
            >
              {withoutDuplicates.map((element, idx) => (
                <li
                  key={`bc_${idx}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => filterBrand(element)}
                >
                  {element}
                </li>
              ))}
            </Panel>
          </Collapse>
        </div>
      </div>

      <div
        className={styles.icon_mobile}
        onClick={() => showFilter()}
        style={{ cursor: "pointer" }}
      >
        <SearchOutlined style={{ color: "#fff", fontSize: "1.8rem" }} />
      </div>
    </>
  );
};

export default Filter;

const closeIcon = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.600586"
      y="18.2778"
      width="25"
      height="3"
      transform="rotate(-45 0.600586 18.2778)"
      fill="#595858"
    />
    <rect
      x="2.98438"
      y="1.13428"
      width="25"
      height="3"
      transform="rotate(45 2.98438 1.13428)"
      fill="#595858"
    />
  </svg>
);

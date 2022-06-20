import React, { useRef, useState, useEffect } from "react";
import { Collapse } from "antd";
import styles from "./Filter.module.scss";
import Link from "next/link";
import { Form, Input, Button, Select, DatePicker, Row, Col } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
const { Search } = Input;

const Filter = ({
	testFunction,
	brands,
	brandClickHandler,
	lookUpValueHandler,
	loading,
	resetValues,
}) => {
	const [form] = Form.useForm();
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
	const [state, setState] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const formValues = Form.useWatch([], form);
	const [brandContent, setBrandContent] = useState("");
	const [brandLoad, setBrandLoad] = useState(true);
	const { Search } = Input;
	const [show, setShow] = useState(false);
	const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

	useEffect(() => {
		if (isDesktop) {
			setShow(true);
		}
	}, []);

	function twoFunctions() {
		if (!isDesktop) {
			resetValues();
			closeFilter();
		}
		resetValues();
	}
	function twoFunctionsBrand(e) {
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
					<Form form={form} name="name" layout="vertical" onFinish={onFinish}>
						<Row>
							<Form.Item
								name="name"
								rules={[
									{
										max: 50,
										message: "Maximo 50 caracteres",
									},
								]}
							>
								<Input />
								{/* <Search htmlType="submit" enterButton /> */}
							</Form.Item>
							<Form.Item>
								<Button type="primary" htmlType="submit" loading={submitting}>
									buscar
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
									<img src="/ventilatorIcon.png" />
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
								<li onClick={() => twoFunctions()}>Todos</li>
							</Link>
							<Link href="/products/equipamientoVenta" passHref>
								<li onClick={() => twoFunctions()}>Venta</li>
							</Link>
							<Link href="/products/equipamientoAlquiler" passHref>
								<li onClick={() => twoFunctions()}>Alquileres</li>
							</Link>
							<Link href="/products/equipamientoSt" passHref>
								<li onClick={() => twoFunctions()}>Servicio técnico</li>
							</Link>
						</Panel>
						<li className={styles.category}>
							<img src="/maskIcon.png" />
							<div>
								<Link href="/products/insumosMedicos" passHref>
									<a onClick={() => twoFunctions()}>Insumos médicos</a>
								</Link>
							</div>
						</li>
						<li className={styles.category}>
							<img src="/bandageIcon.png" />
							<div>
								<Link href="/products/medicinaDeportiva" passHref>
									<a onClick={() => twoFunctions()}>Medicina deportiva</a>
								</Link>
							</div>
						</li>
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
									onClick={() => twoFunctionsBrand(element)}
								>
									{element}
								</li>
							))}
							{/* <li>Alere</li>
								<li>Braun</li>
								<li>Drager</li>
								<li>Fujifilm</li>
								<li>Nutricia</li>
								<li>Philips</li> */}
						</Panel>
					</Collapse>
				</div>
			</div>

			<div
				className={styles.icon_mobile}
				onClick={() => showFilter()}
				style={{ cursor: "pointer" }}
			>
				<UnorderedListOutlined style={{ color: "#fff", fontSize: "1.2rem" }} />
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

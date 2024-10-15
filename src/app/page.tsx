/* eslint-disable react/react-in-jsx-scope */
"use client";

import { ReactNode, useEffect } from "react";
import Card from "./screens/card";
import { Carousel } from 'react-bootstrap';
import { useUserContext } from "@/context/userContext";


export default function Home({ children }: { children: ReactNode }) {
  const { setUser } = useUserContext();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      {children}
      <Carousel>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <Card title="Sobre o Amb.ento" image="../favicon.ico" link="/about" />
            </div>
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <Card title="Pontos de Coleta" link="/map" image="https://img.freepik.com/fotos-gratis/dispositivo-de-smartphone-3d-com-mapa-e-tecnologia-gps_23-2150458977.jpg?t=st=1728845936~exp=1728849536~hmac=9879d34236ceb15a680a020ef52a10468281f658c2ece67ec95c8e5f97fdabaf&w=360" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <Card title="Eletrônicos" link="/eletronicos" image="https://img.freepik.com/fotos-gratis/variedade-de-objetos-despejados-sujos_23-2148996980.jpg?t=st=1727741185~exp=1727744785~hmac=3bd0567f63e15fb3a2adafbd6996f2d7392c0b7b20095af48179ad0d552142e6&w=740" />
            </div>
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <Card title="Entulhos" link="/entulhos" image="https://img.freepik.com/fotos-gratis/lixo-do-canteiro-de-obras_23-2147625950.jpg?t=st=1727741254~exp=1727744854~hmac=5a8cbd5daabc962174344e9da7b65134b0a6adaa9d1cb9b49c3bebc450cf3a31&w=740" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <Card title="Gesso" link="/gesso" image="https://img.freepik.com/fotos-premium/close-up-de-impasto-abstrato-aspera-pintura-de-arte-branca-textura_1160231-8346.jpg?w=826" />
            </div>
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <Card title="Móveis" link="/moveis" image="https://img.freepik.com/fotos-gratis/mudanca-para-um-novo-conceito-de-casa_53876-144474.jpg?t=st=1727741382~exp=1727744982~hmac=2254c12b9ed865b7e4fdfe161f30c77c84bffb07a7f68388f9dfec951ce34cb6&w=740" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <Card title="Remédios" link="/remedios" image="https://img.freepik.com/fotos-gratis/mao-de-mulher-derrama-as-pilulas-de-medicamento-fora-da-garrafa_1150-14200.jpg?t=st=1727741426~exp=1727745026~hmac=2f1008c98fe27e2e97ad80bacd8297c62e1a90d9a64c47db436a02b7fc7ce952&w=740" />
            </div>
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <Card title="Seringas e Agulhas" link="/hospitalar" image="https://img.freepik.com/fotos-premium/conceito-de-vacinacao-de-reforco-contra-o-coronavirus_1302932-4120.jpg?w=826" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-5 d-flex justify-content-center">
              <Card title="Eletrodomésticos" link="/eletrodomesticos" image="https://img.freepik.com/fotos-gratis/variedade-de-objetos-despejados-sujos_23-2148996977.jpg?t=st=1727740611~exp=1727744211~hmac=260881611882b8ad8346557261100a4cb46b5a8fae78f04c281134d30695a3fb&w=740" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

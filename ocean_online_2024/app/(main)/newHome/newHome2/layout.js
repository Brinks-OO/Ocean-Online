"use client";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";

import styled from "styled-components";

import { Metadata } from "next";
import Layout from "../../../../layout/layout";

// import styled from "../../../../public/Loading_Ocean_100x125_1.png";

const BackgroundDiv = styled.div`
//   background-image: url("../../../../public/Loading_Ocean_100x125_1.png");
  background-image: url("http://localhost:3000/_next/static/media/Loading_Ocean_100x125_1.33ae98ad.png");
 height: 100vh;
display: flex;
  background-repeat: no-repeat;
  background-position: center;
//   filter: grayscale(100%) opacity(30%);
`;

export default function AppLayout({ children }) {
  return (
    <Layout>
      <BackgroundDiv>

        {children}
        </BackgroundDiv>
    </Layout>
  );
}

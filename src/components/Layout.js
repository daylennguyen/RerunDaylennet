import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./all.sass";

const TemplateWrapper = ({ children }) => (
	<StaticQuery
		query={graphql`
			query HeadingQuery {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`}
		render={data => (
			<div>
				<Helmet>
					<html lang="en" className="has-navbar-fixed-top" />
					<title>{data.site.siteMetadata.title}</title>
					<meta
						name="description"
						content={data.site.siteMetadata.description}
					/>
					{/* tab bar icon */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/img/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/img/ico/pika32.png"
						sizes="32x32"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/img/ico/pika16.png"
						sizes="16x16"
					/>
					<link rel="mask-icon" href="/img/ico/pika.svg" color="#ff4400" />
					<meta name="theme-color" content="#282828" />
					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=UA-77762517-3"
					/>
					{/* Google Analytics */}
					<script>
						{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'UA-77762517-3');
			`}
					</script>
					{/* Animate on scroll stylesheet */}
					<link
						rel="stylesheet"
						href="https://unpkg.com/aos@next/dist/aos.css"
					/>
					<meta property="og:type" content="business.business" />
					<meta property="og:title" content={data.site.siteMetadata.title} />
					<meta property="og:url" content="/" />
					<meta property="og:image" content="/static/img/banner.svg" />
				</Helmet>
				<Navbar />
				<div className="main">{children}</div>
				<Footer />
			</div>
		)}
	/>
);

export default TemplateWrapper;

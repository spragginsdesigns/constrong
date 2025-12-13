import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export const alt = "Constrong - Concrete Contractor in Kitchener-Waterloo";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					fontFamily: "system-ui, sans-serif",
					position: "relative",
				}}
			>
				{/* Subtle grid pattern overlay */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage:
							"linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
						backgroundSize: "50px 50px",
					}}
				/>

				{/* Accent line at top */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						height: "6px",
						background: "linear-gradient(90deg, #d4a853 0%, #f0c674 50%, #d4a853 100%)",
					}}
				/>

				{/* Logo Shield */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginBottom: "30px",
					}}
				>
					<svg
						width="120"
						height="140"
						viewBox="0 0 500 580"
						fill="none"
						style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}
					>
						{/* Outer shield */}
						<path
							d="M250 20L450 100V320C450 420 360 520 250 560C140 520 50 420 50 320V100L250 20Z"
							fill="#3d3d3d"
							stroke="#d4a853"
							strokeWidth="8"
						/>
						{/* Inner shield */}
						<path
							d="M250 80L400 140V310C400 390 330 470 250 500C170 470 100 390 100 310V140L250 80Z"
							fill="#2a2a2a"
							stroke="#4a4a4a"
							strokeWidth="4"
						/>
						{/* C letter */}
						<path
							d="M310 220C310 180 285 155 250 155C200 155 165 195 165 280C165 365 200 405 250 405C285 405 310 380 310 340"
							stroke="#d4a853"
							strokeWidth="35"
							strokeLinecap="round"
							fill="none"
						/>
					</svg>
				</div>

				{/* Company Name */}
				<div
					style={{
						fontSize: "72px",
						fontWeight: "800",
						color: "#ffffff",
						letterSpacing: "8px",
						marginBottom: "16px",
						textShadow: "0 4px 12px rgba(0,0,0,0.4)",
					}}
				>
					CONSTRONG
				</div>

				{/* Divider */}
				<div
					style={{
						width: "120px",
						height: "3px",
						background: "linear-gradient(90deg, transparent, #d4a853, transparent)",
						marginBottom: "20px",
					}}
				/>

				{/* Tagline */}
				<div
					style={{
						fontSize: "28px",
						fontWeight: "500",
						color: "#b0b0b0",
						letterSpacing: "2px",
						textTransform: "uppercase",
					}}
				>
					Concrete Contractor
				</div>

				{/* Location */}
				<div
					style={{
						fontSize: "22px",
						fontWeight: "400",
						color: "#808080",
						marginTop: "12px",
						letterSpacing: "1px",
					}}
				>
					Kitchener-Waterloo & Surrounding Areas
				</div>

				{/* Bottom accent */}
				<div
					style={{
						position: "absolute",
						bottom: "40px",
						display: "flex",
						alignItems: "center",
						gap: "12px",
					}}
				>
					<div
						style={{
							width: "8px",
							height: "8px",
							background: "#d4a853",
							borderRadius: "50%",
						}}
					/>
					<div
						style={{
							fontSize: "16px",
							color: "#606060",
							letterSpacing: "3px",
							textTransform: "uppercase",
						}}
					>
						Foundations | Footings | Slabs | Walls
					</div>
					<div
						style={{
							width: "8px",
							height: "8px",
							background: "#d4a853",
							borderRadius: "50%",
						}}
					/>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}

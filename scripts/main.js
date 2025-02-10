// JavaScript Document

// COMPONENTS

// Header
class Header extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
			<header>
				<nav class="navbar">
					<div class="nav-flex container">
						<div class="logo">
							<a name="link" href="/" aria-label="Ouzel Creative home page">
								<svg xmlns="http://www.w3.org/2000/svg" id="Text" viewBox="0 0 2927.64 549.96">
									<defs>
										<style>
											.cls-1{fill:#00313d}
										</style>
									</defs>
									<path d="M605.41 219.95c0-74.62 39.13-123.45 114.35-123.45s112.53 50.05 112.53 121.93-39.13 118.9-114.35 118.9-112.53-48.23-112.53-117.38Zm59.15-3.33c0 38.82 4.25 107.07 57.02 107.07 43.98 0 51.56-72.19 51.56-104.64s-8.79-109.49-52.17-109.49c-47.01 0-56.41 71.58-56.41 107.07ZM913.55 162.63l5.76 4.55v109.8c0 27 10.31 37.91 27 37.91 12.74 0 20.93-3.94 27.9-9.4v-74.01c0-18.81-4.55-35.79-23.66-38.52v-9.1c23.96-4.25 54.29-10.31 72.49-21.23l6.67 4.55-.3 121.32c0 14.26 7.89 25.48 21.84 25.17v10.61l-72.79 9.1-4.25-6.37v-6.67c-13.34 10.31-33.36 16.98-51.56 16.98-31.54 0-58.54-12.44-58.54-46.1v-55.81c0-18.81-4.55-39.73-23.66-42.46v-9.1c23.96-4.25 54.9-10.31 73.1-21.23ZM1145.86 181.74h-39.43c-16.08 0-26.99 11.83-39.13 41.55h-9.7l12.44-56.11h138.31v9.1l-86.75 142.86h37.61c18.2 0 34.88-17.29 46.1-40.34h8.19l-13.04 54.59h-144.07v-9.71l89.48-141.95ZM1312.66 162.33c46.4 0 73.4 30.63 73.4 75.22v5.16l-103.73 10.01c3.03 29.12 17.29 50.65 52.47 50.65 15.77 0 32.45-4.55 43.98-15.77l3.94 7.58c-14.56 25.78-45.8 38.52-74.31 38.52-52.78 0-84.93-31.24-84.93-83.71 0-56.11 33.67-87.66 89.17-87.66Zm22.15 70.97c0-15.16-.91-57.63-22.75-57.63-28.82 0-30.33 43.07-30.33 63.39v2.73l53.08-8.49Z" style="fill:#00313d"/>
									<path d="M1385.75 324.29c15.17-7.89 23.66-22.75 23.66-35.79V157.17c0-18.81-4.55-44.28-23.66-47.01v-9.1c23.05-.91 54.29-10.31 72.49-21.23l6.67 4.55-.3 204.13c0 13.04 8.19 28.21 23.05 35.79v9.1h-101.91v-9.1ZM1694.19 96.81c35.79 0 67.64 10.01 88.57 39.13l-35.79 63.09-9.71-2.12c10.31-45.19-10.61-87.05-46.1-85.84-43.98 1.52-54.9 61.27-54.9 94.63 0 48.23 22.44 93.42 74.62 93.42 28.81 0 50.35-11.53 69.46-36.09l7.58 4.85c-19.41 49.44-52.78 69.46-97.36 69.46-71.28 0-112.83-46.41-112.83-117.99 0-79.47 47.32-122.54 116.47-122.54ZM1790.92 333.39v-9.1c15.16-7.89 23.66-22.75 23.66-35.79v-57.02c0-18.81-4.55-35.79-23.66-38.52v-9.1c23.35-1.82 54.29-10.31 72.49-21.23l6.67 4.55v19.72c14.86-17.59 32.76-24.57 55.2-24.57 13.65 0 23.05 3.94 29.72 9.1 17.29 13.65 13.95 44.59-7.28 48.23-6.98 1.21-14.25-.61-20.63-6.37-10.01-9.4-22.44-26.99-33.36-25.48-13.04 2.12-18.5 11.22-23.66 24.57l-.3 76.13c0 13.04 8.19 28.21 23.05 35.79v9.1h-101.91ZM2058.73 162.33c46.4 0 73.4 30.63 73.4 75.22v5.16l-103.73 10.01c3.03 29.12 17.29 50.65 52.47 50.65 15.77 0 32.45-4.55 43.98-15.77l3.94 7.58c-14.56 25.78-45.8 38.52-74.31 38.52-52.78 0-84.93-31.24-84.93-83.71 0-56.11 33.67-87.66 89.17-87.66Zm22.14 70.97c0-15.16-.91-57.63-22.75-57.63-28.82 0-30.33 43.07-30.33 63.39v2.73l53.08-8.49ZM2244.04 221.17v-1.52c0-12.74 1.52-44.89-17.89-44.89-25.17 0-17.59 49.44-51.56 49.44-11.83 0-23.66-9.4-23.36-22.14.91-33.97 50.96-39.73 77.35-39.73 33.06-.61 70.67 9.4 70.67 50.05v75.52c0 14.26 8.19 26.08 22.14 25.78v10.61l-73.4 9.1-4.25-6.37v-12.13c-12.13 13.35-30.94 18.5-49.44 18.5-27.3 0-50.35-11.83-51.26-41.86-1.21-50.05 57.33-67.33 101-70.37Zm-20.63 88.56c8.19 0 14.86-2.73 20.32-7.89 0-23.05.3-46.4.3-69.46-22.14 6.98-42.16 21.53-42.16 48.53 0 15.47 7.58 28.81 21.53 28.81ZM2321.67 181.74v-14.56c20.62-3.64 54.9-24.87 70.37-46.71l6.67 4.55v38.22c37.31-35.18 63.09-64.3 100.39-64.91 43.37-.61 40.04 56.11 8.79 56.11-2.42 0-4.85-.3-7.58-.91-4.55-1.21-9.4-1.52-14.56-1.52-40.04.3-64.91 12.74-87.05 25.78l-.3 97.36c0 20.93 6.98 35.79 22.14 35.18 5.76-.3 12.74-2.73 20.93-7.89l5.15 8.19c-13.65 20.63-32.15 26.39-53.38 26.39-37.01 0-50.05-18.5-50.05-53.38V181.73h-21.53Zm124.35 2.12c23.35-1.82 54.29-10.31 72.49-21.23l6.67 4.55-.3 121.32c0 13.04 8.19 28.21 23.05 35.79v9.1h-101.91v-9.1c15.16-7.89 23.66-22.75 23.66-35.79v-57.02c0-18.81-4.55-35.79-23.66-38.52v-9.1ZM2551.55 167.18h103.43v9.1c-17.89 6.37-18.2 28.82-12.44 39.13l36.7 65.82 26.39-60.05c7.89-18.2.91-39.43-15.17-44.89v-9.1h73.4v9.1c-16.68 2.73-33.36 22.14-46.71 50.35L2666.8 333.4h-21.23l-62.48-121.32c-6.37-12.44-14.86-29.72-31.54-35.79v-9.1ZM2854.23 162.33c46.4 0 73.4 30.63 73.4 75.22v5.16l-103.73 10.01c3.03 29.12 17.29 50.65 52.47 50.65 15.77 0 32.45-4.55 43.98-15.77l3.94 7.58c-14.56 25.78-45.8 38.52-74.31 38.52-52.78 0-84.93-31.24-84.93-83.71 0-56.11 33.67-87.66 89.17-87.66Zm22.15 70.97c0-15.16-.91-57.63-22.75-57.63-28.82 0-30.33 43.07-30.33 63.39v2.73l53.08-8.49ZM697.68 445.83c2.76 3.63 4.14 8.16 4.14 13.61 0 7.5-2.58 13.34-7.73 17.5-5.15 4.17-12.35 6.25-21.58 6.25h-37.85v-87.2h36.49c8.99 0 16.02 2 21.09 6s7.61 9.59 7.61 16.76c0 4.62-1.22 8.62-3.65 12-2.43 3.38-5.83 5.9-10.2 7.54 5.03 1.4 8.92 3.92 11.69 7.54Zm-50.53-12.12h22.02c12.2 0 18.31-4.62 18.31-13.85 0-4.62-1.51-8.04-4.51-10.27-3.01-2.23-7.61-3.34-13.79-3.34h-22.02v27.46Zm37.97 35.74c2.97-2.31 4.45-5.89 4.45-10.76s-1.51-8.64-4.51-11.07c-3.01-2.43-7.65-3.65-13.91-3.65h-24v28.94h24c6.35 0 11.01-1.15 13.98-3.46ZM789.26 483.18h-14.1l-14.84-27.95c-1.65-2.97-3.61-5.05-5.88-6.25-2.27-1.19-5.26-1.79-8.97-1.79h-14.35v35.99H718.5v-87.2h37.11c9.65 0 17.01 2.15 22.08 6.43 5.07 4.29 7.61 10.56 7.61 18.8 0 6.68-1.88 12.16-5.63 16.45-3.75 4.29-9.09 7.01-16.02 8.16 4.29 1.32 7.83 4.54 10.64 9.65l14.97 27.71Zm-35.12-46.26c6.43 0 11.19-1.26 14.29-3.77 3.09-2.51 4.64-6.41 4.64-11.69s-1.53-9.13-4.58-11.56c-3.05-2.43-7.83-3.65-14.35-3.65h-23.13v30.67h23.13ZM860.38 461.66h-44.16l-9.28 21.52h-12.86l38.84-87.2h10.64l38.84 87.2h-12.74l-9.28-21.52Zm-4.33-10.14-17.69-41.31-17.81 41.31h35.5ZM965.39 395.98v87.2h-9.77l-49.85-65.8v65.8h-12v-87.2h9.65l49.97 65.92v-65.92h12ZM985.67 395.98h30.55c14.1 0 25.02 3.79 32.78 11.38 7.75 7.59 11.63 18.31 11.63 32.16s-3.88 24.59-11.63 32.22c-7.75 7.63-18.68 11.44-32.78 11.44h-30.55v-87.2Zm29.81 76.56c21.44 0 32.16-11.01 32.16-33.02s-10.72-32.9-32.16-32.9h-17.07v65.92h17.07ZM1077.94 395.98h12.74v87.2h-12.74v-87.2ZM1182.58 395.98v87.2h-9.77l-49.85-65.8v65.8h-12v-87.2h9.65l49.97 65.92v-65.92h12ZM1273.61 436.92v41.06c-3.71 1.9-8.37 3.4-13.98 4.51a87.738 87.738 0 0 1-17.07 1.67c-8.82 0-16.45-1.77-22.88-5.32-6.43-3.54-11.34-8.66-14.72-15.34-3.38-6.68-5.07-14.68-5.07-24s1.69-17.09 5.07-23.81c3.38-6.72 8.23-11.85 14.53-15.4 6.31-3.54 13.75-5.32 22.33-5.32 6.18 0 11.87.91 17.07 2.72 5.19 1.82 9.6 4.45 13.23 7.92l-4.58 9.4c-4.12-3.38-8.21-5.81-12.25-7.3-4.04-1.48-8.49-2.23-13.36-2.23-9.4 0-16.6 2.91-21.58 8.72-4.99 5.81-7.48 14.25-7.48 25.29s2.55 19.85 7.67 25.67c5.11 5.81 12.57 8.72 22.39 8.72 6.43 0 12.78-.95 19.05-2.84v-24.49h-20.28v-9.65h31.91ZM1382.7 452.51h-25.6v25.6h-9.15v-25.6h-25.6v-9.15h25.6v-25.6h9.15v25.6h25.6v9.15ZM1516.03 395.98v87.2h-11.5l.12-63.08-25.97 49.1h-8.66l-26.1-48.48.12 62.46h-11.5v-87.2h10.27l31.66 60.36 31.42-60.36h10.14ZM1593.83 461.66h-44.16l-9.28 21.52h-12.86l38.84-87.2h10.64l38.84 87.2h-12.74l-9.28-21.52Zm-4.33-10.14-17.69-41.31-17.81 41.31h35.5ZM1697.97 483.18h-14.1l-14.84-27.95c-1.65-2.97-3.61-5.05-5.88-6.25-2.27-1.19-5.26-1.79-8.97-1.79h-14.35v35.99h-12.62v-87.2h37.11c9.65 0 17.01 2.15 22.08 6.43 5.07 4.29 7.61 10.56 7.61 18.8 0 6.68-1.88 12.16-5.63 16.45-3.75 4.29-9.09 7.01-16.02 8.16 4.29 1.32 7.83 4.54 10.64 9.65l14.97 27.71Zm-35.13-46.26c6.43 0 11.19-1.26 14.29-3.77 3.09-2.51 4.64-6.41 4.64-11.69s-1.53-9.13-4.58-11.56c-3.05-2.43-7.83-3.65-14.35-3.65h-23.13v30.67h23.13ZM1768.22 483.18l-42.92-41.06v41.06h-12.74v-87.2h12.74v39.7l41.06-39.7h15.71l-44.03 42.18 46.13 45.02h-15.96ZM1791.97 395.98h56.65v10.27h-44.16v27.46h41.68v10.39h-41.68v28.82h44.16v10.27h-56.65v-87.2ZM1884.36 406.62h-29.44v-10.64h71.86v10.64h-29.56v76.56h-12.86v-76.56ZM1938.41 395.98h12.74v87.2h-12.74v-87.2ZM2043.04 395.98v87.2h-9.77l-49.84-65.8v65.8h-12v-87.2h9.65l49.97 65.92v-65.92h12ZM2134.08 436.92v41.06c-3.71 1.9-8.37 3.4-13.98 4.51a87.738 87.738 0 0 1-17.07 1.67c-8.82 0-16.45-1.77-22.88-5.32-6.43-3.54-11.34-8.66-14.72-15.34-3.38-6.68-5.07-14.68-5.07-24s1.69-17.09 5.07-23.81c3.38-6.72 8.22-11.85 14.53-15.4 6.31-3.54 13.75-5.32 22.33-5.32 6.18 0 11.87.91 17.07 2.72 5.19 1.82 9.6 4.45 13.23 7.92l-4.58 9.4c-4.12-3.38-8.21-5.81-12.24-7.3-4.04-1.48-8.49-2.23-13.36-2.23-9.4 0-16.59 2.91-21.58 8.72-4.99 5.81-7.48 14.25-7.48 25.29s2.55 19.85 7.67 25.67c5.11 5.81 12.57 8.72 22.39 8.72 6.43 0 12.78-.95 19.05-2.84v-24.49h-20.28v-9.65h31.91ZM2243.16 452.51h-25.6v25.6h-9.15v-25.6h-25.6v-9.15h25.6v-25.6h9.15v25.6h25.6v9.15ZM2415.83 395.98l-30.67 87.2h-10.51l-23.5-67.53-23.75 67.53h-10.51l-30.55-87.2h12.86l23.38 69.14 24.12-69.14 9.4.12 23.62 69.39 23.75-69.51h12.37ZM2429.56 395.98h56.65v10.27h-44.16v27.46h41.68v10.39h-41.68v28.82h44.16v10.27h-56.65v-87.2ZM2564.93 445.83c2.76 3.63 4.14 8.16 4.14 13.61 0 7.5-2.58 13.34-7.73 17.5-5.15 4.17-12.35 6.25-21.58 6.25h-37.85v-87.2h36.49c8.99 0 16.02 2 21.09 6s7.61 9.59 7.61 16.76c0 4.62-1.22 8.62-3.65 12-2.43 3.38-5.83 5.9-10.2 7.54 5.03 1.4 8.92 3.92 11.69 7.54Zm-50.53-12.12h22.02c12.2 0 18.31-4.62 18.31-13.85 0-4.62-1.51-8.04-4.51-10.27-3.01-2.23-7.61-3.34-13.79-3.34h-22.02v27.46Zm37.97 35.74c2.97-2.31 4.45-5.89 4.45-10.76s-1.51-8.64-4.51-11.07c-3.01-2.43-7.65-3.65-13.92-3.65h-23.99v28.94h23.99c6.35 0 11.01-1.15 13.98-3.46ZM2595.72 481.45c-5.65-1.81-10.49-4.49-14.53-8.04l4.58-9.4c4.29 3.46 8.72 5.96 13.3 7.48 4.58 1.53 9.71 2.29 15.4 2.29 6.51 0 11.54-1.21 15.09-3.65 3.54-2.43 5.32-5.88 5.32-10.33 0-3.79-1.65-6.62-4.95-8.47-3.3-1.86-8.58-3.61-15.83-5.26-6.93-1.48-12.62-3.17-17.07-5.07-4.45-1.9-7.94-4.47-10.45-7.73-2.52-3.26-3.77-7.4-3.77-12.43s1.34-9.61 4.02-13.48c2.68-3.87 6.49-6.9 11.44-9.09 4.95-2.18 10.68-3.28 17.19-3.28 6.1 0 11.85.93 17.25 2.78 5.4 1.86 9.83 4.51 13.3 7.98l-4.45 9.4c-4.04-3.3-8.18-5.75-12.43-7.36-4.25-1.61-8.76-2.41-13.54-2.41-6.27 0-11.19 1.3-14.78 3.9-3.59 2.6-5.38 6.21-5.38 10.82 0 3.96 1.57 6.95 4.7 8.97 3.13 2.02 8.16 3.86 15.09 5.5 7.25 1.65 13.13 3.36 17.62 5.13s8.08 4.21 10.76 7.3c2.68 3.09 4.02 7.11 4.02 12.06s-1.34 9.44-4.02 13.23c-2.68 3.79-6.51 6.72-11.5 8.78-4.99 2.06-10.91 3.09-17.75 3.09s-12.97-.91-18.62-2.72ZM2663.32 395.98h12.74v87.2h-12.74v-87.2ZM2717.12 406.62h-29.44v-10.64h71.86v10.64h-29.56v76.56h-12.86v-76.56ZM2771.17 395.98h56.65v10.27h-44.16v27.46h41.68v10.39h-41.68v28.82h44.16v10.27h-56.65v-87.2ZM2852.25 481.45c-5.65-1.81-10.49-4.49-14.53-8.04l4.58-9.4c4.29 3.46 8.72 5.96 13.3 7.48 4.58 1.53 9.71 2.29 15.4 2.29 6.51 0 11.54-1.21 15.09-3.65 3.54-2.43 5.32-5.88 5.32-10.33 0-3.79-1.65-6.62-4.95-8.47-3.3-1.86-8.58-3.61-15.83-5.26-6.93-1.48-12.62-3.17-17.07-5.07-4.45-1.9-7.94-4.47-10.45-7.73-2.52-3.26-3.77-7.4-3.77-12.43s1.34-9.61 4.02-13.48c2.68-3.87 6.49-6.9 11.44-9.09 4.95-2.18 10.68-3.28 17.19-3.28 6.1 0 11.85.93 17.25 2.78 5.4 1.86 9.83 4.51 13.3 7.98l-4.45 9.4c-4.04-3.3-8.18-5.75-12.43-7.36-4.25-1.61-8.76-2.41-13.54-2.41-6.27 0-11.19 1.3-14.78 3.9-3.59 2.6-5.38 6.21-5.38 10.82 0 3.96 1.57 6.95 4.7 8.97 3.13 2.02 8.16 3.86 15.09 5.5 7.25 1.65 13.13 3.36 17.62 5.13s8.08 4.21 10.76 7.3c2.68 3.09 4.02 7.11 4.02 12.06s-1.34 9.44-4.02 13.23c-2.68 3.79-6.51 6.72-11.5 8.78-4.99 2.06-10.91 3.09-17.75 3.09s-12.97-.91-18.62-2.72Z" style="fill:#00313d"/>
									<path d="M274.98 549.96C123.11 549.96 0 426.85 0 274.98S123.11 0 274.98 0s274.98 123.11 274.98 274.98-123.11 274.98-274.98 274.98" style="fill:#09c3f4"/>
									<path d="M506.07 297.87c-23.24-6.19-43.8-20.95-59.37-41.4-1.77-2.3-3.47-4.7-5.1-7.15-.03-.03-.05-.07-.08-.1-2.91-3.72-6.1-7.17-9.49-10.27-12.96-11.84-29.1-18.86-46.57-18.86-19.62 0-37.51 8.83-51.18 23.39-.02.02-.02.03-.04.03-2.12 2.82-4.37 5.51-6.7 8.1l-.04.05c-18.2 20.23-41.8 33.42-67.91 35.98-3.1.32-6.25.48-9.42.48-62.7 0-137.87-67.74-138.95-143.58 0-.68-.37-1.27-.9-1.45-1.04-.38-2.55-.4-5.89-.83-.56-.07-1.1.3-1.32.93-10.31 28.52-16.03 60.05-16.03 93.18 0 23.92 2.98 46.99 8.51 68.69 4.48 19 1.3 9.55 7.69 28.5-5.2 5.38-18.15 17.61-33.73 41.83 1.17 1.61 2.37 3.21 3.6 4.79.86-.99 1.75-1.93 2.65-2.83 11.62-11.5 25.56-20.64 38.78-29.11 13.53-8.66 27.51-16.27 41.9-22.6 20.48-9.02 41.8-15.57 63.49-18.48 12.82-1.72 25.75-2.2 38.63-1.43-21.13.07-41.69 4.24-61.77 12.23-9.81 3.9-19.39 8.58-28.75 13.87-11.96 6.75-23.87 13.66-35.27 21.77-11.38 8.09-22.27 17.27-32.16 27.89-4.53 4.87-8.84 10.06-12.85 15.55.95.98 1.9 1.96 2.87 2.92 4.26-2.89 8.56-5.68 12.77-8.38 13.53-8.66 27.51-16.27 41.9-22.6 20.48-9.02 41.8-15.58 63.49-18.48 12.82-1.72 25.75-2.2 38.63-1.43-21.13.07-41.69 4.24-61.77 12.23-9.81 3.9-19.39 8.58-28.75 13.87-11.96 6.75-23.87 13.66-35.27 21.77-6.32 4.5-12.49 9.34-18.42 14.57 3.71 3.14 7.52 6.14 11.42 9.01 5.62-2.93 11.31-5.67 17.06-8.2 20.48-9.02 41.8-15.57 63.49-18.48 12.82-1.72 25.74-2.2 38.63-1.43-21.13.07-41.69 4.24-61.77 12.23-9.81 3.9-19.39 8.58-28.75 13.87-5.75 3.24-11.48 6.52-17.15 9.96 9.23 5.95 18.85 11.17 28.66 15.57 10.51-3.09 21.16-5.43 31.89-6.87 12.82-1.72 25.75-2.2 38.63-1.43-21.02.07-41.48 4.2-61.46 12.11 15.07 5.92 30.48 9.91 45.66 11.7 25.21-.6 51.29-4.94 65.98-9.74 28.21-9.22 76.45-16.8 130.88-75.05-26.43 48.07-90.26 80.08-116.84 90.06-3.37 1.27-6.88 2.43-10.52 3.5 16.83.32 33.63-2.34 50.31-7.83 7.11-2.35 14.1-5.17 20.94-8.49 27.78-13.46 52.97-34.94 72.36-62.57 13.89-19.78 23.29-43.19 39.93-59.96 7.49-7.55 15.76-13.93 24.57-18.94 4.7-2.68 12.23-7.35 18.99-9.59 1.29-.43 1.22-2.65-.08-3v-.03Z" style="fill:#00313d"/>
								</svg>
							</a>
						</div>
						<div class="main-nav">
							<ul class="nav_list">
								<li><a name="link" class="nav-link" href="/#work">Work</a></li>
								<li><a name="link" class="nav-link" href="/#about">About</a></li>
								<li><a name="link" class="button btn-alternate-1" href="/book-a-call">Book a Call</a></li>
							</ul>
						</div>
						<div class="hamb">
							<span class="hamb-line"></span>
						</div>
					</div>
				</nav>
			</header>
		`;
	}
}

// Footer
customElements.define('header-component', Header);

class Footer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
    	<footer class="footer">
      	<div class="container">
        	<div class="footer-grid">
          	<div class="footer-flex footer-logo">
            	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2131.29 376.1">
              	<style>
                	.cls-1 {
                  	fill: #00313d;
                	}
                	.cls-1,
                	.cls-2,
                	.cls-3 {
                  	stroke-width: 0px;
                	}
                	.letters {
                  	fill: #e6e7e8;
                	}
                	.cls-3 {
                  	fill: #00c2f3;
                	}
              	</style>
              	<circle class="cls-3" cx="188.05" cy="188.05" r="188.05" />
              	<path
                	class="cls-1"
                	d="M346.08,203.71c-15.89-4.24-29.96-14.32-40.6-28.31-1.21-1.58-2.37-3.21-3.49-4.89-.02-.02-.03-.05-.05-.07-1.99-2.55-4.17-4.9-6.49-7.02-8.86-8.1-19.9-12.9-31.85-12.9-13.42,0-25.65,6.04-35,15.99,0,.01,0,.02-.03.02-1.45,1.93-2.99,3.77-4.58,5.54l-.03.04c-12.45,13.84-28.59,22.86-46.44,24.6-2.12.22-4.27.33-6.44.33-42.88,0-94.29-46.32-95.02-98.19,0-.46-.26-.86-.62-1-.71-.26-1.21-.45-1.56-.59.17.18-.19.31-2.47.02-.38-.05-.75.21-.9.63-7.05,19.5-10.96,41.07-10.96,63.72,0,16.36,2.04,32.13,5.82,46.98,3.06,12.99.89,6.53,5.26,19.49-3.56,3.67-12.41,12.05-23.07,28.61.8,1.1,1.62,2.19,2.46,3.27.59-.67,1.19-1.32,1.81-1.94,7.95-7.87,17.48-14.12,26.52-19.91,9.25-5.92,18.82-11.13,28.65-15.46,14.01-6.17,28.59-10.65,43.41-12.64,8.77-1.17,17.61-1.51,26.42-.98-14.44.05-28.51,2.9-42.24,8.36-6.7,2.67-13.26,5.87-19.66,9.48-8.18,4.62-16.32,9.34-24.12,14.88-7.78,5.53-15.23,11.81-21.99,19.07-3.1,3.33-6.04,6.88-8.79,10.64.65.67,1.3,1.34,1.96,2,2.92-1.98,5.85-3.88,8.74-5.73,9.25-5.92,18.82-11.13,28.65-15.46,14.01-6.17,28.59-10.65,43.41-12.64,8.77-1.17,17.61-1.51,26.41-.98-14.44.05-28.51,2.9-42.24,8.36-6.7,2.67-13.26,5.87-19.66,9.48-8.18,4.62-16.32,9.34-24.12,14.88-4.33,3.07-8.54,6.39-12.6,9.96,2.54,2.15,5.14,4.2,7.81,6.17,3.84-2,7.73-3.88,11.67-5.61,14.01-6.17,28.59-10.65,43.41-12.64,8.77-1.17,17.61-1.51,26.41-.98-14.44.05-28.51,2.9-42.24,8.36-6.7,2.67-13.26,5.87-19.66,9.48-3.93,2.22-7.85,4.46-11.73,6.81,6.32,4.07,12.89,7.64,19.6,10.65,7.18-2.11,14.47-3.71,21.81-4.7,8.77-1.17,17.61-1.51,26.42-.98-14.37.05-28.37,2.87-42.03,8.28,10.31,4.05,20.85,6.78,31.22,8,17.24-.41,35.08-3.38,45.13-6.66,19.29-6.3,52.28-11.49,89.51-51.32-18.07,32.87-61.72,54.76-79.91,61.59-2.3.86-4.71,1.66-7.19,2.4,11.51.22,23-1.6,34.4-5.36,4.86-1.6,9.64-3.54,14.32-5.81,19-9.21,36.22-23.89,49.49-42.78,9.5-13.53,15.93-29.53,27.31-41,5.12-5.16,10.78-9.52,16.8-12.95,3.22-1.83,8.36-5.02,12.99-6.56.88-.29.84-1.81-.06-2.05Z"
              	/>
              	<path
                	class="letters"
                	d="M411.33,196.48c0-55.26,28.98-91.43,84.69-91.43s83.35,37.07,83.35,90.31-28.98,88.06-84.69,88.06-83.35-35.72-83.35-86.94ZM455.13,194.01c0,28.75,3.14,79.3,42.23,79.3,32.57,0,38.19-53.47,38.19-77.5s-6.51-81.1-38.64-81.1c-34.82,0-41.78,53.02-41.78,79.3Z"
              	/>
              	<path
                	class="letters"
                	d="M639.55,154.02l4.27,3.37v81.32c0,19.99,7.64,28.08,20,28.08,9.44,0,15.5-2.92,20.67-6.96v-54.81c0-13.93-3.37-26.51-17.52-28.53v-6.74c17.75-3.15,40.21-7.64,53.69-15.73l4.94,3.37-.23,89.86c0,10.56,5.84,18.87,16.17,18.65v7.86l-53.91,6.74-3.15-4.72v-4.94c-9.88,7.64-24.71,12.58-38.19,12.58-23.36,0-43.35-9.21-43.35-34.15v-41.33c0-13.93-3.37-29.43-17.52-31.45v-6.74c17.75-3.15,40.66-7.64,54.14-15.73Z"
              	/>
              	<path
                	class="letters"
                	d="M811.61,168.17h-29.21c-11.91,0-19.99,8.76-28.98,30.78h-7.19l9.21-41.56h102.44v6.74l-64.25,105.81h27.86c13.48,0,25.83-12.81,34.15-29.88h6.06l-9.66,40.44h-106.71v-7.19l66.27-105.13Z"
              	/>
              	<path
                	class="letters"
                	d="M935.15,153.79c34.37,0,54.37,22.69,54.37,55.71v3.82l-76.83,7.41c2.25,21.57,12.8,37.52,38.86,37.52,11.68,0,24.04-3.37,32.57-11.68l2.92,5.62c-10.79,19.1-33.92,28.53-55.04,28.53-39.09,0-62.9-23.14-62.9-62,0-41.56,24.94-64.92,66.05-64.92ZM951.55,206.36c0-11.23-.68-42.68-16.85-42.68-21.34,0-22.47,31.9-22.47,46.95v2.02l39.31-6.29Z"
              	/>
              	<path
                	class="letters"
                	d="M989.28,273.75c11.23-5.84,17.52-16.85,17.52-26.51v-97.27c0-13.93-3.37-32.8-17.52-34.82v-6.74c17.07-.67,40.21-7.64,53.69-15.73l4.94,3.37-.23,151.19c0,9.66,6.07,20.89,17.07,26.51v6.74h-75.48v-6.74Z"
              	/>
              	<path
                	class="letters"
                	d="M1217.73,105.27c26.51,0,50.1,7.41,65.6,28.98l-26.51,46.73-7.19-1.57c7.64-33.47-7.86-64.47-34.14-63.58-32.58,1.12-40.66,45.38-40.66,70.09,0,35.72,16.62,69.19,55.26,69.19,21.34,0,37.29-8.54,51.44-26.73l5.62,3.6c-14.38,36.62-39.09,51.44-72.11,51.44-52.79,0-83.57-34.37-83.57-87.39,0-58.86,35.05-90.76,86.26-90.76Z"
              	/>
              	<path
                	class="letters"
                	d="M1289.38,280.49v-6.74c11.23-5.84,17.52-16.85,17.52-26.51v-42.23c0-13.93-3.37-26.51-17.52-28.53v-6.74c17.3-1.35,40.21-7.64,53.69-15.73l4.94,3.37v14.6c11.01-13.03,24.26-18.2,40.89-18.2,10.11,0,17.07,2.92,22.02,6.74,12.81,10.11,10.33,33.02-5.39,35.72-5.17.9-10.56-.45-15.28-4.72-7.41-6.96-16.62-19.99-24.71-18.87-9.66,1.57-13.7,8.31-17.52,18.2l-.22,56.39c0,9.66,6.06,20.89,17.07,26.51v6.74h-75.48Z"
              	/>
              	<path
                	class="letters"
                	d="M1487.73,153.79c34.37,0,54.37,22.69,54.37,55.71v3.82l-76.83,7.41c2.25,21.57,12.8,37.52,38.86,37.52,11.68,0,24.04-3.37,32.57-11.68l2.92,5.62c-10.79,19.1-33.92,28.53-55.04,28.53-39.09,0-62.9-23.14-62.9-62,0-41.56,24.94-64.92,66.05-64.92ZM1504.13,206.36c0-11.23-.68-42.68-16.85-42.68-21.34,0-22.47,31.9-22.47,46.95v2.02l39.31-6.29Z"
              	/>
              	<path
                	class="letters"
                	d="M1624.98,197.38v-1.12c0-9.43,1.12-33.25-13.25-33.25-18.65,0-13.03,36.62-38.19,36.62-8.76,0-17.52-6.96-17.3-16.4.68-25.16,37.74-29.43,57.29-29.43,24.49-.45,52.34,6.96,52.34,37.07v55.94c0,10.56,6.07,19.32,16.4,19.1v7.86l-54.36,6.74-3.15-4.72v-8.99c-8.98,9.89-22.91,13.7-36.62,13.7-20.22,0-37.29-8.76-37.97-31-.9-37.07,42.46-49.87,74.81-52.12ZM1609.7,262.97c6.07,0,11.01-2.02,15.05-5.84,0-17.07.23-34.37.23-51.44-16.4,5.17-31.23,15.95-31.23,35.94,0,11.46,5.62,21.34,15.95,21.34Z"
              	/>
              	<path
                	class="letters"
                	d="M1682.47,168.17v-10.78c15.27-2.7,40.66-18.42,52.12-34.6l4.94,3.37v28.31c27.63-26.06,46.73-47.62,74.36-48.07,32.12-.45,29.65,41.56,6.51,41.56-1.79,0-3.59-.22-5.62-.67-3.37-.9-6.96-1.12-10.78-1.12-29.65.22-48.07,9.43-64.47,19.1l-.23,72.11c0,15.5,5.17,26.51,16.4,26.06,4.27-.22,9.44-2.02,15.5-5.84l3.82,6.07c-10.11,15.28-23.81,19.54-39.54,19.54-27.41,0-37.07-13.7-37.07-39.54v-75.48h-15.95ZM1774.58,169.74c17.3-1.35,40.21-7.64,53.69-15.73l4.94,3.37-.22,89.86c0,9.66,6.06,20.89,17.07,26.51v6.74h-75.48v-6.74c11.23-5.84,17.52-16.85,17.52-26.51v-42.23c0-13.93-3.37-26.51-17.52-28.53v-6.74Z"
              	/>
              	<path
                	class="letters"
                	d="M1852.74,157.39h76.6v6.74c-13.25,4.72-13.48,21.34-9.21,28.98l27.18,48.75,19.54-44.48c5.84-13.48.67-29.2-11.23-33.25v-6.74h54.37v6.74c-12.36,2.02-24.71,16.4-34.6,37.29l-37.29,79.08h-15.73l-46.28-89.86c-4.72-9.21-11.01-22.02-23.36-26.51v-6.74Z"
              	/>
              	<path
                	class="letters"
                	d="M2076.92,153.79c34.37,0,54.37,22.69,54.37,55.71v3.82l-76.83,7.41c2.25,21.57,12.8,37.52,38.86,37.52,11.68,0,24.04-3.37,32.57-11.68l2.92,5.62c-10.79,19.1-33.92,28.53-55.04,28.53-39.09,0-62.9-23.14-62.9-62,0-41.56,24.94-64.92,66.05-64.92ZM2093.32,206.36c0-11.23-.68-42.68-16.85-42.68-21.34,0-22.47,31.9-22.47,46.95v2.02l39.31-6.29Z"
              	/>
            	</svg>
            	<p>
              	Ouzel Creative is a graphic and web design studio located in Loveland, CO.
            	</p>
          	</div>
						<div class="footer-subgrid">
							<div class="footer-links">
								<a name="link" href="/">Home</a>
								<a name="link" href="/#work">Work</a>
								<a name="link" href="/contact">Contact</a>
							</div>
							<div class="footer-links">
								<a name="link" href="/#about">About</a>
								<a name="link" href="/posts">Posts</a>
								<a name="link" href="/sustainability">Sustainability</a>
							</div>
						</div>
          	<div class="social">
            	<a
              	class="social-link"
              	href="https://www.instagram.com/ouzelcreative/"
              	target="_blank"
								rel="external nofollow"
            	>
            		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              		<path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
          			</svg>
              	<p>Instagram</p>
            	</a>
            	<a
              	class="social-link"
              	href="https://www.linkedin.com/company/ouzel-creative/"
              	target="_blank"
								rel="external nofollow"
            	>
            		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              		<path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
          			</svg>
              	<p>Linkedin</p>
            	</a>
            	<a
              	class="social-link"
              	href="https://www.greengeeks.com"
              	target="_blank"
              	alt="GreenGeeks"
              	rel="external nofollow"
              >
								<img
                	name="link"
									src="/images/Green_15.png"
                	border="0"
                	alt="Eco-friendly website badge"
                	loading="lazy"
            		/>
							</a>
          	</div>
          	<div class="footer-flex">
            	<p>Ready to get started? Schedule your free consultation.</p>
            	<div><a name="link" class="button btn-main" href="/book-a-call">Book a Call</a></div>
          	</div>
        	</div>
					<div class="flex space-between affiliates">
						<div class="flex">
							<div>
								<a href="https://www.marketingmadesimple.com/Katy-Delehoy" target="_blank" rel="external nofollow">
									<img
										width="104px"
										src="/images/StoryBrand_Badge_2025_White.svg"
										alt="StoryBrand Certified Coach badge"
										title="StoryBrand Certified Coach"
										loading="lazy"
									/>
								</a>
							</div>
							<div>
								<a href="https://www.greenbiztracker.org/business/ouzel-creative-loveland" target="_blank" rel="external nofollow">
									<img
										width="104px"
										src="/images/CGBN_Silver_Level_Stamp.png"
										alt="Colorado Green Business Network certified silver member badge"
										title="Colorado Green Business Network Certified Silver"
										loading="lazy"
									/>
								</a>
							</div>
        		</div>
						<div class="flex">
							<div>
            		<a href="https://www.bbb.org/us/co/loveland/profile/graphic-designer/ouzel-creative-llc-0805-46144719/#sealclick" target="_blank" rel="external nofollow">
									<img 
										src="https://seal-wynco.bbb.org/seals/gray-seal-96-50-bbb-46144719.png"
										style="border: 0;"
										alt="Ouzel Creative, LLC BBB Business Review"
										title="Better Business Bureau Accredited"
										loading="lazy"
									/>
								</a>
          		</div>
          		<div>
            		<a href="https://business.loveland.org/list/member/ouzel-creative-llc-14008" target="_blank" rel="external nofollow">
              		<img 
										name="link"
										src="/images/Loveland-Chamber-Proud-member-Logo-Gray.png"
										alt="Loveland Chamber of Commerce Member badge"
										title="Loveland Chamber of Commerce Member"
										loading="lazy"
									/>
            		</a>
          		</div>
          		<div>
            		<a href="https://www.lovelandcreates.org/listing/ouzel-creative/" target="_blank" rel="external nofollow">
              		<img 
										name="link"
										src="/images/lcd-H-logo-tagline-gray.png" 
										alt="Loveland Creative District Member badge"
										title="Loveland Creative District Member"
										loading="lazy"
									/>
            		</a>
          		</div>
						</div>
					</div>
        	<div class="copyright">
          	<div>
            	<p>
              	Copyright &copy; <span id="copyright-year"></span> Ouzel Creative. All rights reserved.
            	</p>
          	</div>
						<div>&vert;</div>
						<div>
							<p>Images of Katy &amp; Shawn by <a target="_blank" href="https://www.danamartincreative.com" name="link" rel="external nofollow">Dana Martin Creative</a></p>
						</div>
          	<div>&vert;</div>
          	<div><a class="copyright-link" name="link" href="/privacy-policy" rel="privacy-policy">Privacy Policy</a></div>
          	<div>&vert;</div>
          	<div><a class="copyright-link" name="link" href="/terms-of-service" rel="terms-of-service">Terms of Service</a></div>
        	</div>
      	</div>
    	</footer>
		`;
	}
}

customElements.define('footer-component', Footer);

// Check links and update them if in subfolder
function switchHref() {
  if (location.pathname.split('/').length - 1 > 1) {
    let links = Array.prototype.slice.call(document.getElementsByName('link'));
    links.forEach(function(link) {
      let href = link.getAttribute('href');
      link.setAttribute('href', '..' + href);
    });    
  };
};
switchHref(); 

// NAVIGATION
const hamb = document.querySelector(".hamb");
const navMenu = document.querySelector(".main-nav");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamb.classList.toggle("active");
	navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamb.classList.remove("active");
	navMenu.classList.remove("active");
}

// UPDATE COPYRIGHT
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

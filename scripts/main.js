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
							<a name="link" href="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xml:space="preserve"
									style="enable-background: new 0 0 2131.29 376.1"
									viewBox="0 0 2131.29 376.1"
								>
									<style>
										.cls-1 {
											fill: #414042;
										}
										.cls-1,
										.cls-2 {
											stroke-width: 0px;
										}
										.cls-2 {
											fill: #00c2f3;
										}
									</style>
									<circle
										class="cls-2"
										cx="188.05"
										cy="188.05"
										r="188.05"
										style="fill: #00c2f3"
									/>
									<path
										class="cls-1"
										d="M346.08,203.71c-15.89-4.24-29.96-14.32-40.6-28.31-1.21-1.58-2.37-3.21-3.49-4.89-.02-.02-.03-.05-.05-.07-1.99-2.55-4.17-4.9-6.49-7.02-8.86-8.1-19.9-12.9-31.85-12.9-13.42,0-25.65,6.04-35,15.99,0,.01,0,.02-.03.02-1.45,1.93-2.99,3.77-4.58,5.54l-.03.04c-12.45,13.84-28.59,22.86-46.44,24.6-2.12.22-4.27.33-6.44.33-42.88,0-94.29-46.32-95.02-98.19,0-.46-.26-.86-.62-1-.71-.26-1.21-.45-1.56-.59.17.18-.19.31-2.47.02-.38-.05-.75.21-.9.63-7.05,19.5-10.96,41.07-10.96,63.72,0,16.36,2.04,32.13,5.82,46.98,3.06,12.99.89,6.53,5.26,19.49-3.56,3.67-12.41,12.05-23.07,28.61.8,1.1,1.62,2.19,2.46,3.27.59-.67,1.19-1.32,1.81-1.94,7.95-7.87,17.48-14.12,26.52-19.91,9.25-5.92,18.82-11.13,28.65-15.46,14.01-6.17,28.59-10.65,43.41-12.64,8.77-1.17,17.61-1.51,26.42-.98-14.44.05-28.51,2.9-42.24,8.36-6.7,2.67-13.26,5.87-19.66,9.48-8.18,4.62-16.32,9.34-24.12,14.88-7.78,5.53-15.23,11.81-21.99,19.07-3.1,3.33-6.04,6.88-8.79,10.64.65.67,1.3,1.34,1.96,2,2.92-1.98,5.85-3.88,8.74-5.73,9.25-5.92,18.82-11.13,28.65-15.46,14.01-6.17,28.59-10.65,43.41-12.64,8.77-1.17,17.61-1.51,26.41-.98-14.44.05-28.51,2.9-42.24,8.36-6.7,2.67-13.26,5.87-19.66,9.48-8.18,4.62-16.32,9.34-24.12,14.88-4.33,3.07-8.54,6.39-12.6,9.96,2.54,2.15,5.14,4.2,7.81,6.17,3.84-2,7.73-3.88,11.67-5.61,14.01-6.17,28.59-10.65,43.41-12.64,8.77-1.17,17.61-1.51,26.41-.98-14.44.05-28.51,2.9-42.24,8.36-6.7,2.67-13.26,5.87-19.66,9.48-3.93,2.22-7.85,4.46-11.73,6.81,6.32,4.07,12.89,7.64,19.6,10.65,7.18-2.11,14.47-3.71,21.81-4.7,8.77-1.17,17.61-1.51,26.42-.98-14.37.05-28.37,2.87-42.03,8.28,10.31,4.05,20.85,6.78,31.22,8,17.24-.41,35.08-3.38,45.13-6.66,19.29-6.3,52.28-11.49,89.51-51.32-18.07,32.87-61.72,54.76-79.91,61.59-2.3.86-4.71,1.66-7.19,2.4,11.51.22,23-1.6,34.4-5.36,4.86-1.6,9.64-3.54,14.32-5.81,19-9.21,36.22-23.89,49.49-42.78,9.5-13.53,15.93-29.53,27.31-41,5.12-5.16,10.78-9.52,16.8-12.95,3.22-1.83,8.36-5.02,12.99-6.56.88-.29.84-1.81-.06-2.05Z"
									/>
									<path
										class="cls-1"
										d="M411.33,196.48c0-55.26,28.98-91.43,84.69-91.43s83.35,37.07,83.35,90.31-28.98,88.06-84.69,88.06-83.35-35.72-83.35-86.94ZM455.13,194.01c0,28.75,3.14,79.3,42.23,79.3,32.57,0,38.19-53.47,38.19-77.5s-6.51-81.1-38.64-81.1c-34.82,0-41.78,53.02-41.78,79.3Z"
									/>
									<path
										class="cls-1"
										d="M639.55,154.02l4.27,3.37v81.32c0,19.99,7.64,28.08,20,28.08,9.44,0,15.5-2.92,20.67-6.96v-54.81c0-13.93-3.37-26.51-17.52-28.53v-6.74c17.75-3.15,40.21-7.64,53.69-15.73l4.94,3.37-.23,89.86c0,10.56,5.84,18.87,16.17,18.65v7.86l-53.91,6.74-3.15-4.72v-4.94c-9.88,7.64-24.71,12.58-38.19,12.58-23.36,0-43.35-9.21-43.35-34.15v-41.33c0-13.93-3.37-29.43-17.52-31.45v-6.74c17.75-3.15,40.66-7.64,54.14-15.73Z"
									/>
									<path
										class="cls-1"
										d="M811.61,168.17h-29.21c-11.91,0-19.99,8.76-28.98,30.78h-7.19l9.21-41.56h102.44v6.74l-64.25,105.81h27.86c13.48,0,25.83-12.81,34.15-29.88h6.06l-9.66,40.44h-106.71v-7.19l66.27-105.13Z"
									/>
									<path
										class="cls-1"
										d="M935.15,153.79c34.37,0,54.37,22.69,54.37,55.71v3.82l-76.83,7.41c2.25,21.57,12.8,37.52,38.86,37.52,11.68,0,24.04-3.37,32.57-11.68l2.92,5.62c-10.79,19.1-33.92,28.53-55.04,28.53-39.09,0-62.9-23.14-62.9-62,0-41.56,24.94-64.92,66.05-64.92ZM951.55,206.36c0-11.23-.68-42.68-16.85-42.68-21.34,0-22.47,31.9-22.47,46.95v2.02l39.31-6.29Z"
									/>
									<path
										class="cls-1"
										d="M989.28,273.75c11.23-5.84,17.52-16.85,17.52-26.51v-97.27c0-13.93-3.37-32.8-17.52-34.82v-6.74c17.07-.67,40.21-7.64,53.69-15.73l4.94,3.37-.23,151.19c0,9.66,6.07,20.89,17.07,26.51v6.74h-75.48v-6.74Z"
									/>
									<path
										class="cls-1"
										d="M1217.73,105.27c26.51,0,50.1,7.41,65.6,28.98l-26.51,46.73-7.19-1.57c7.64-33.47-7.86-64.47-34.14-63.58-32.58,1.12-40.66,45.38-40.66,70.09,0,35.72,16.62,69.19,55.26,69.19,21.34,0,37.29-8.54,51.44-26.73l5.62,3.6c-14.38,36.62-39.09,51.44-72.11,51.44-52.79,0-83.57-34.37-83.57-87.39,0-58.86,35.05-90.76,86.26-90.76Z"
									/>
									<path
										class="cls-1"
										d="M1289.38,280.49v-6.74c11.23-5.84,17.52-16.85,17.52-26.51v-42.23c0-13.93-3.37-26.51-17.52-28.53v-6.74c17.3-1.35,40.21-7.64,53.69-15.73l4.94,3.37v14.6c11.01-13.03,24.26-18.2,40.89-18.2,10.11,0,17.07,2.92,22.02,6.74,12.81,10.11,10.33,33.02-5.39,35.72-5.17.9-10.56-.45-15.28-4.72-7.41-6.96-16.62-19.99-24.71-18.87-9.66,1.57-13.7,8.31-17.52,18.2l-.22,56.39c0,9.66,6.06,20.89,17.07,26.51v6.74h-75.48Z"
									/>
									<path
										class="cls-1"
										d="M1487.73,153.79c34.37,0,54.37,22.69,54.37,55.71v3.82l-76.83,7.41c2.25,21.57,12.8,37.52,38.86,37.52,11.68,0,24.04-3.37,32.57-11.68l2.92,5.62c-10.79,19.1-33.92,28.53-55.04,28.53-39.09,0-62.9-23.14-62.9-62,0-41.56,24.94-64.92,66.05-64.92ZM1504.13,206.36c0-11.23-.68-42.68-16.85-42.68-21.34,0-22.47,31.9-22.47,46.95v2.02l39.31-6.29Z"
									/>
									<path
										class="cls-1"
										d="M1624.98,197.38v-1.12c0-9.43,1.12-33.25-13.25-33.25-18.65,0-13.03,36.62-38.19,36.62-8.76,0-17.52-6.96-17.3-16.4.68-25.16,37.74-29.43,57.29-29.43,24.49-.45,52.34,6.96,52.34,37.07v55.94c0,10.56,6.07,19.32,16.4,19.1v7.86l-54.36,6.74-3.15-4.72v-8.99c-8.98,9.89-22.91,13.7-36.62,13.7-20.22,0-37.29-8.76-37.97-31-.9-37.07,42.46-49.87,74.81-52.12ZM1609.7,262.97c6.07,0,11.01-2.02,15.05-5.84,0-17.07.23-34.37.23-51.44-16.4,5.17-31.23,15.95-31.23,35.94,0,11.46,5.62,21.34,15.95,21.34Z"
									/>
									<path
										class="cls-1"
										d="M1682.47,168.17v-10.78c15.27-2.7,40.66-18.42,52.12-34.6l4.94,3.37v28.31c27.63-26.06,46.73-47.62,74.36-48.07,32.12-.45,29.65,41.56,6.51,41.56-1.79,0-3.59-.22-5.62-.67-3.37-.9-6.96-1.12-10.78-1.12-29.65.22-48.07,9.43-64.47,19.1l-.23,72.11c0,15.5,5.17,26.51,16.4,26.06,4.27-.22,9.44-2.02,15.5-5.84l3.82,6.07c-10.11,15.28-23.81,19.54-39.54,19.54-27.41,0-37.07-13.7-37.07-39.54v-75.48h-15.95ZM1774.58,169.74c17.3-1.35,40.21-7.64,53.69-15.73l4.94,3.37-.22,89.86c0,9.66,6.06,20.89,17.07,26.51v6.74h-75.48v-6.74c11.23-5.84,17.52-16.85,17.52-26.51v-42.23c0-13.93-3.37-26.51-17.52-28.53v-6.74Z"
									/>
									<path
										class="cls-1"
										d="M1852.74,157.39h76.6v6.74c-13.25,4.72-13.48,21.34-9.21,28.98l27.18,48.75,19.54-44.48c5.84-13.48.67-29.2-11.23-33.25v-6.74h54.37v6.74c-12.36,2.02-24.71,16.4-34.6,37.29l-37.29,79.08h-15.73l-46.28-89.86c-4.72-9.21-11.01-22.02-23.36-26.51v-6.74Z"
									/>
									<path
										class="cls-1"
										d="M2076.92,153.79c34.37,0,54.37,22.69,54.37,55.71v3.82l-76.83,7.41c2.25,21.57,12.8,37.52,38.86,37.52,11.68,0,24.04-3.37,32.57-11.68l2.92,5.62c-10.79,19.1-33.92,28.53-55.04,28.53-39.09,0-62.9-23.14-62.9-62,0-41.56,24.94-64.92,66.05-64.92ZM2093.32,206.36c0-11.23-.68-42.68-16.85-42.68-21.34,0-22.47,31.9-22.47,46.95v2.02l39.31-6.29Z"
									/>
								</svg>
							</a>
						</div>
						<div class="main-nav">
							<ul class="nav_list">
								<li><a name="link" class="nav-link" href="/#work">Work</a></li>
								<li><a name="link" class="nav-link" href="/#about">About</a></li>
								<li><a name="link" class="btn-outline" href="/book-a-call">Book a Call</a></li>
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
                  	fill: #414042;
                	}
                	.cls-1,
                	.cls-2,
                	.cls-3 {
                  	stroke-width: 0px;
                	}
                	.cls-2 {
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
                	class="cls-2"
                	d="M411.33,196.48c0-55.26,28.98-91.43,84.69-91.43s83.35,37.07,83.35,90.31-28.98,88.06-84.69,88.06-83.35-35.72-83.35-86.94ZM455.13,194.01c0,28.75,3.14,79.3,42.23,79.3,32.57,0,38.19-53.47,38.19-77.5s-6.51-81.1-38.64-81.1c-34.82,0-41.78,53.02-41.78,79.3Z"
              	/>
              	<path
                	class="cls-2"
                	d="M639.55,154.02l4.27,3.37v81.32c0,19.99,7.64,28.08,20,28.08,9.44,0,15.5-2.92,20.67-6.96v-54.81c0-13.93-3.37-26.51-17.52-28.53v-6.74c17.75-3.15,40.21-7.64,53.69-15.73l4.94,3.37-.23,89.86c0,10.56,5.84,18.87,16.17,18.65v7.86l-53.91,6.74-3.15-4.72v-4.94c-9.88,7.64-24.71,12.58-38.19,12.58-23.36,0-43.35-9.21-43.35-34.15v-41.33c0-13.93-3.37-29.43-17.52-31.45v-6.74c17.75-3.15,40.66-7.64,54.14-15.73Z"
              	/>
              	<path
                	class="cls-2"
                	d="M811.61,168.17h-29.21c-11.91,0-19.99,8.76-28.98,30.78h-7.19l9.21-41.56h102.44v6.74l-64.25,105.81h27.86c13.48,0,25.83-12.81,34.15-29.88h6.06l-9.66,40.44h-106.71v-7.19l66.27-105.13Z"
              	/>
              	<path
                	class="cls-2"
                	d="M935.15,153.79c34.37,0,54.37,22.69,54.37,55.71v3.82l-76.83,7.41c2.25,21.57,12.8,37.52,38.86,37.52,11.68,0,24.04-3.37,32.57-11.68l2.92,5.62c-10.79,19.1-33.92,28.53-55.04,28.53-39.09,0-62.9-23.14-62.9-62,0-41.56,24.94-64.92,66.05-64.92ZM951.55,206.36c0-11.23-.68-42.68-16.85-42.68-21.34,0-22.47,31.9-22.47,46.95v2.02l39.31-6.29Z"
              	/>
              	<path
                	class="cls-2"
                	d="M989.28,273.75c11.23-5.84,17.52-16.85,17.52-26.51v-97.27c0-13.93-3.37-32.8-17.52-34.82v-6.74c17.07-.67,40.21-7.64,53.69-15.73l4.94,3.37-.23,151.19c0,9.66,6.07,20.89,17.07,26.51v6.74h-75.48v-6.74Z"
              	/>
              	<path
                	class="cls-2"
                	d="M1217.73,105.27c26.51,0,50.1,7.41,65.6,28.98l-26.51,46.73-7.19-1.57c7.64-33.47-7.86-64.47-34.14-63.58-32.58,1.12-40.66,45.38-40.66,70.09,0,35.72,16.62,69.19,55.26,69.19,21.34,0,37.29-8.54,51.44-26.73l5.62,3.6c-14.38,36.62-39.09,51.44-72.11,51.44-52.79,0-83.57-34.37-83.57-87.39,0-58.86,35.05-90.76,86.26-90.76Z"
              	/>
              	<path
                	class="cls-2"
                	d="M1289.38,280.49v-6.74c11.23-5.84,17.52-16.85,17.52-26.51v-42.23c0-13.93-3.37-26.51-17.52-28.53v-6.74c17.3-1.35,40.21-7.64,53.69-15.73l4.94,3.37v14.6c11.01-13.03,24.26-18.2,40.89-18.2,10.11,0,17.07,2.92,22.02,6.74,12.81,10.11,10.33,33.02-5.39,35.72-5.17.9-10.56-.45-15.28-4.72-7.41-6.96-16.62-19.99-24.71-18.87-9.66,1.57-13.7,8.31-17.52,18.2l-.22,56.39c0,9.66,6.06,20.89,17.07,26.51v6.74h-75.48Z"
              	/>
              	<path
                	class="cls-2"
                	d="M1487.73,153.79c34.37,0,54.37,22.69,54.37,55.71v3.82l-76.83,7.41c2.25,21.57,12.8,37.52,38.86,37.52,11.68,0,24.04-3.37,32.57-11.68l2.92,5.62c-10.79,19.1-33.92,28.53-55.04,28.53-39.09,0-62.9-23.14-62.9-62,0-41.56,24.94-64.92,66.05-64.92ZM1504.13,206.36c0-11.23-.68-42.68-16.85-42.68-21.34,0-22.47,31.9-22.47,46.95v2.02l39.31-6.29Z"
              	/>
              	<path
                	class="cls-2"
                	d="M1624.98,197.38v-1.12c0-9.43,1.12-33.25-13.25-33.25-18.65,0-13.03,36.62-38.19,36.62-8.76,0-17.52-6.96-17.3-16.4.68-25.16,37.74-29.43,57.29-29.43,24.49-.45,52.34,6.96,52.34,37.07v55.94c0,10.56,6.07,19.32,16.4,19.1v7.86l-54.36,6.74-3.15-4.72v-8.99c-8.98,9.89-22.91,13.7-36.62,13.7-20.22,0-37.29-8.76-37.97-31-.9-37.07,42.46-49.87,74.81-52.12ZM1609.7,262.97c6.07,0,11.01-2.02,15.05-5.84,0-17.07.23-34.37.23-51.44-16.4,5.17-31.23,15.95-31.23,35.94,0,11.46,5.62,21.34,15.95,21.34Z"
              	/>
              	<path
                	class="cls-2"
                	d="M1682.47,168.17v-10.78c15.27-2.7,40.66-18.42,52.12-34.6l4.94,3.37v28.31c27.63-26.06,46.73-47.62,74.36-48.07,32.12-.45,29.65,41.56,6.51,41.56-1.79,0-3.59-.22-5.62-.67-3.37-.9-6.96-1.12-10.78-1.12-29.65.22-48.07,9.43-64.47,19.1l-.23,72.11c0,15.5,5.17,26.51,16.4,26.06,4.27-.22,9.44-2.02,15.5-5.84l3.82,6.07c-10.11,15.28-23.81,19.54-39.54,19.54-27.41,0-37.07-13.7-37.07-39.54v-75.48h-15.95ZM1774.58,169.74c17.3-1.35,40.21-7.64,53.69-15.73l4.94,3.37-.22,89.86c0,9.66,6.06,20.89,17.07,26.51v6.74h-75.48v-6.74c11.23-5.84,17.52-16.85,17.52-26.51v-42.23c0-13.93-3.37-26.51-17.52-28.53v-6.74Z"
              	/>
              	<path
                	class="cls-2"
                	d="M1852.74,157.39h76.6v6.74c-13.25,4.72-13.48,21.34-9.21,28.98l27.18,48.75,19.54-44.48c5.84-13.48.67-29.2-11.23-33.25v-6.74h54.37v6.74c-12.36,2.02-24.71,16.4-34.6,37.29l-37.29,79.08h-15.73l-46.28-89.86c-4.72-9.21-11.01-22.02-23.36-26.51v-6.74Z"
              	/>
              	<path
                	class="cls-2"
                	d="M2076.92,153.79c34.37,0,54.37,22.69,54.37,55.71v3.82l-76.83,7.41c2.25,21.57,12.8,37.52,38.86,37.52,11.68,0,24.04-3.37,32.57-11.68l2.92,5.62c-10.79,19.1-33.92,28.53-55.04,28.53-39.09,0-62.9-23.14-62.9-62,0-41.56,24.94-64.92,66.05-64.92ZM2093.32,206.36c0-11.23-.68-42.68-16.85-42.68-21.34,0-22.47,31.9-22.47,46.95v2.02l39.31-6.29Z"
              	/>
            	</svg>
            	<p>
              	Ouzel Creative is a graphic and web design studio located in Loveland, CO.
            	</p>
          	</div>
          	<div class="footer-links">
            	<a name="link" href="/">Home</a>
            	<a name="link" href="/#work">Work</a>
            	<a name="link" href="/#about">About</a>
            	<a name="link" href="/contact">Contact</a>
							<a name="link" href="/posts">Posts</a>
          	</div>
          	<div class="footer-flex social">
            	<a
              	class="social-link"
              	href="https://www.instagram.com/ouzelcreative/"
              	target="_blank"
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
              	rel="nofollow"
              >
								<img
                	name="link"
									src="/images/Green_14.png"
                	border="0"
                	alt="300% green website badge"
                	loading="lazy"
            		/>
							</a>
          	</div>
          	<div class="footer-flex">
            	<p>Ready to get started? Schedule your free consultation.</p>
            	<div><a name="link" class="btn-footer" href="/book-a-call">Book a Call</a></div>
          	</div>
        	</div>
        	<div class="grid-row affiliates">
          	<div class="grid-width-1">
            	<a href="https://www.bbb.org/us/co/loveland/profile/graphic-designer/ouzel-creative-llc-0805-46144719/#sealclick" target="_blank" rel="nofollow">
								<img 
									src="https://seal-wynco.bbb.org/seals/gray-seal-96-50-bbb-46144719.png"
									style="border: 0;"
									alt="Ouzel Creative, LLC BBB Business Review"
									loading="lazy"
								/>
							</a>
          	</div>
          	<div class="grid-width-1">
            	<a href="https://business.loveland.org/list/member/ouzel-creative-llc-14008">
              	<img 
									name="link"
									src="/images/Loveland-Chamber-Proud-member-Logo-Gray.png"
									alt="Loveland Chamber of Commerce logo"
									loading="lazy"
								/>
            	</a>
          	</div>
          	<div class="grid-width-1">
            	<a href="https://www.lovelandcreates.org/listing/ouzel-creative/">
              	<img 
									name="link"
									src="/images/lcd-H-logo-tagline-gray.png" 
									alt="Loveland Creative District logo"
									loading="lazy"
								/>
            	</a>
          	</div>
        	</div>
        	<div class="copyright">
          	<div>
            	<p>
              	Copyright &copy; <span id="copyright-year"></span> Ouzel Creative. All rights reserved.
            	</p>
          	</div>
          	<div>&vert;</div>
          	<div><a href="/privacy-policy">Privacy Policy</a></div>
          	<div>&vert;</div>
          	<div><a href="/terms-of-service">Terms of Service</a></div>
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

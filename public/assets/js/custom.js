(function () {
	"use strict";

	// Helpers
	const $ = (sel, root = document) => root.querySelector(sel);
	const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

	// Preloader
	const preloader = $("#preloader");
	if (preloader) {
		window.addEventListener("load", () => {
			preloader.classList.add("hidden");
		});
	}

	// Navbar Sticky
	const navbar = $("#navbar");
	if (navbar) {
		window.addEventListener("scroll", () => {
			navbar.classList.toggle("navbar-sticky", window.scrollY >= 120);
		});
	}

	// Search Box
	const searchBtn = $("#searchBtn");
	const searchBox = $("#searchBox");
	if (searchBtn && searchBox) {
		searchBtn.addEventListener("click", () => {
			searchBtn.classList.toggle("active");
			searchBox.classList.toggle("active");
		});
	}

	// Menu Toggle Button (Sidebar Modal)
	const toggles = $$(".navbar-burger-toggle");
	const menu = $(".sidebar-modal");
	const backdrop = $(".backdrop");
	const closeBtn = menu ? $("button", menu) : null;
	if (toggles.length && menu && backdrop) {
		const openMenu = () => {
			menu.classList.add("show");
			backdrop.classList.add("show");
		};
		const closeMenu = () => {
			menu.classList.remove("show");
			backdrop.classList.remove("show");
		};
		toggles.forEach((btn) => btn.addEventListener("click", openMenu));
		closeBtn?.addEventListener("click", closeMenu);
		backdrop.addEventListener("click", closeMenu);
	}

	// Menu Toggle Button (Dashboard Sidebar Modal)
	const dashboardSidebar = document.querySelector(".dashboard-sidebar");
	const dashboardSidebarToggles = document.querySelectorAll(".dashboard-sidebar-toggle");
	if (dashboardSidebar && dashboardSidebarToggles.length) {
		dashboardSidebarToggles.forEach((btn) => {
			btn.addEventListener("click", () => {
			dashboardSidebar.classList.toggle("show");
			});
		});
	}

	// Banner Slider (Fade)
	const bannerWrapper = $(".banner-images");
	if (bannerWrapper) {
		const slides = $$(".image", bannerWrapper);
		if (slides.length) {
			let index = 0;
			slides.forEach((s) => s.classList.remove("active"));
			slides[0].classList.add("active");
			if (slides.length > 1) {
				setInterval(() => {
					slides[index].classList.remove("active");
					index = (index + 1) % slides.length;
					slides[index].classList.add("active");
				}, 2500);
			}
		}
	}

	// ScrollCue
	if (typeof scrollCue !== "undefined") {
		scrollCue.init();
	}

	// Swiper Sliders (only init if wrapper exists)
	if (typeof Swiper !== "undefined") {

		// Vehicles Swiper
		if ($(".vehiclesSwiper")) {
			new Swiper(".vehiclesSwiper", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 25,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false
				},
				breakpoints: {
					1280: {
						slidesPerView: 2
					}
				},
				pagination: {
					el: ".vehicles-swiper-pagination",
					clickable: true
				},
			});
		}

		// Testimonials Swiper
		if ($(".testimonialsSwiper")) {
			new Swiper(".testimonialsSwiper", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 25,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false
				},
				breakpoints: {
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 3
					},
					1536: {
						slidesPerView: 4
					},
				},
				pagination: {
					el: ".testimonials-swiper-pagination",
					clickable: true
				},
			});
		}

		// Reviews Swiper
		if ($(".reviewsSwiper")) {
			new Swiper(".reviewsSwiper", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 25,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false
				},
				breakpoints: {
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 3
					},
					1536: {
						slidesPerView: 4
					},
				},
				pagination: {
					el: ".reviews-swiper-pagination",
					clickable: true
				},
			});
		}

	}

	// Accordion
	$$(".accordion").forEach((accordion) => {
		const items = $$(".accordion-item", accordion);
		items.forEach((item) => {
			const toggle = $(".accordion-toggle", item);
			const panel = $(".accordion-panel", item);
			if (!toggle || !panel) return;
			toggle.addEventListener("click", () => {
				// Close only within this accordion
				items.forEach((i) => {
					i.classList.remove("active");
					$(".accordion-panel", i)?.classList.add("hidden");
				});
				// Open clicked item
				item.classList.add("active");
				panel.classList.remove("hidden");
			});
		});
	});

	// Tabs (multiple groups)
	$$(".tabs").forEach((tabsBlock) => {
		const navLinks = $$(".nav-link", tabsBlock);
		const tabPanes = $$(".tab-pane", tabsBlock);
		if (!navLinks.length || !tabPanes.length) return;
		navLinks.forEach((btn, idx) => {
			btn.addEventListener("click", () => {
				navLinks.forEach((link) => link.classList.remove("active"));
				tabPanes.forEach((pane) => pane.classList.remove("active"));
				btn.classList.add("active");
				tabPanes[idx]?.classList.add("active");
			});
		});
	});

	// Date & Time Picker (multiple inputs)
	$$('input[type="date"], input[type="time"]').forEach((input) => {
		input.addEventListener("focus", () => {
			input.showPicker?.();
		});
	});

	// Countdown (multiple, auto stop)
	const countdowns = $$(".countdown[data-countdown]");
	if (countdowns.length) {
		const pad2 = (n) => String(n).padStart(2, "0");
		countdowns.forEach((wrap) => {
			const targetStr = wrap.getAttribute("data-countdown");
			const targetTime = targetStr ? new Date(targetStr).getTime() : NaN;
			const daysEl = $("[data-days]", wrap);
			const hoursEl = $("[data-hours]", wrap);
			const minutesEl = $("[data-minutes]", wrap);
			const secondsEl = $("[data-seconds]", wrap);
			if (!targetStr || Number.isNaN(targetTime) || !daysEl || !hoursEl || !minutesEl || !secondsEl) return;
			let timerId = null;
			const update = () => {
				const diff = targetTime - Date.now();
				if (diff <= 0) {
					daysEl.textContent = "00";
					hoursEl.textContent = "00";
					minutesEl.textContent = "00";
					secondsEl.textContent = "00";
					if (timerId) clearInterval(timerId);
					return;
				}
				const days = Math.floor(diff / (1000 * 60 * 60 * 24));
				const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((diff / (1000 * 60)) % 60);
				const seconds = Math.floor((diff / 1000) % 60);
				daysEl.textContent = pad2(days);
				hoursEl.textContent = pad2(hours);
				minutesEl.textContent = pad2(minutes);
				secondsEl.textContent = pad2(seconds);
			};
			update();
			timerId = setInterval(update, 1000);
		});
	}

	// Quantity Counter
	document.querySelectorAll(".qty-counter-input").forEach(counter => {
		const input = counter.querySelector("input[type='number']");
		const minusBtn = counter.querySelector(".qty-minus");
		const plusBtn = counter.querySelector(".qty-plus");
		plusBtn.addEventListener("click", () => {
			const current = parseInt(input.value, 10) || 0;
			input.value = current + 1;
		});
		minusBtn.addEventListener("click", () => {
			const min = parseInt(input.min, 10) || 0;
			const current = parseInt(input.value, 10) || 0;
			if (current > min) {
				input.value = current - 1;
			}
		});
	});

	// Dark/Light Toggle (applies class to <html>)
	const lightDarkToggle = $("#lightDarkToggle");
	if (lightDarkToggle) {
		const html = document.documentElement;
		const icon = $("i", lightDarkToggle);
		const savedTheme = localStorage.getItem("rentq_template");
		if (savedTheme) {
			html.classList.remove("light", "dark");
			html.classList.add(savedTheme);
			if (icon) icon.className = savedTheme === "dark" ? "ri-sun-fill" : "ri-moon-fill";
		}
		lightDarkToggle.addEventListener("click", () => {
			const isDark = html.classList.contains("dark");
			html.classList.remove(isDark ? "dark" : "light");
			html.classList.add(isDark ? "light" : "dark");
			localStorage.setItem("rentq_template", isDark ? "light" : "dark");
			if (icon) icon.className = isDark ? "ri-moon-fill" : "ri-sun-fill";
		});
	}

	// LTR/RTL Toggle
	const rtlToggleBtn = $("#ltrRtlToggle");
	if (rtlToggleBtn) {
		const htmlTag = document.documentElement;
		const icon = $("i", rtlToggleBtn);
		const savedDirection = localStorage.getItem("textDirection") || "ltr";
		htmlTag.setAttribute("dir", savedDirection);
		if (icon) icon.className = savedDirection === "rtl" ? "ri-english-input" : "ri-translate";
		rtlToggleBtn.addEventListener("click", () => {
			const current = htmlTag.getAttribute("dir") || "ltr";
			const newDir = current === "ltr" ? "rtl" : "ltr";
			htmlTag.setAttribute("dir", newDir);
			localStorage.setItem("textDirection", newDir);
			if (icon) icon.className = newDir === "rtl" ? "ri-english-input" : "ri-translate";
		});
	}

	// Back to Top
	const backToTopBtn = $("#backToTopBtn");
	if (backToTopBtn) {
		window.addEventListener("scroll", () => {
			backToTopBtn.classList.toggle("show", window.scrollY > 300);
		});
		backToTopBtn.addEventListener("click", () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	}

	// Sidebar Navbar Menu (Accordion)
	const sidebar = $(".sidebar-navbar-nav");
	if (sidebar) {
		const list = $$(".nav-item", sidebar);
		function accordionHandler(e) {
			e.stopPropagation();
			const item = this;
			if (item.classList.contains("active")) {
				item.classList.remove("active");
				return;
			}
			// keep parent active behavior if needed
			if (item.parentElement?.parentElement?.classList.contains("active")) {
				item.classList.add("active");
				return;
			}
			list.forEach((li) => li.classList.remove("active"));
			item.classList.add("active");
		}
		list.forEach((li) => li.addEventListener("click", accordionHandler));
	}

})();
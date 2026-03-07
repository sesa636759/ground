/*!
 * SPDX-FileCopyrightText: © 2025 Schneider Electric
 * 
 * SPDX-License-Identifier: Apache-2.0
 */
import { g as getAssetPath, p as proxyCustomElement, H, c as createEvent, h } from './p-2806fee1.js';
import { i as inheritAriaAttributes } from './p-8abba29b.js';

const checkedSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTYuMzEgMTEuODYgMy4wOCA4LjYzbC43MS0uNzEgMi41MiAyLjUyIDUuOS01Ljk0LjcxLjd6Ii8+PC9zdmc+';

const clearSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJtMTEuNDMgNS4yNi0uNzEtLjctMi43NCAyLjc2LTIuNzMtMi43Ni0uNzEuNyAyLjc0IDIuNzctMi43NCAyLjc3LjcxLjcxIDIuNzMtMi43NyAyLjc0IDIuNzcuNzEtLjcxLTIuNzQtMi43N3oiLz48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNy41IiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==';

const draggableSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZD0iTTQuOTYgMGEyLjE0OCAyLjE0OCAwIDEgMSAwIDQuMjk3QTIuMTQ4IDIuMTQ4IDAgMCAxIDQuOTYgMHpNMi44MTIgMTcuODUyYTIuMTQ4IDIuMTQ4IDAgMSAwIDQuMjk3IDAgMi4xNDggMi4xNDggMCAwIDAtNC4yOTcgMHptMC03Ljg1MmEyLjE0OCAyLjE0OCAwIDEgMCA0LjI5NyAwIDIuMTQ4IDIuMTQ4IDAgMCAwLTQuMjk3IDB6bTEwLjA3OS03Ljg1MmEyLjE0OCAyLjE0OCAwIDEgMCA0LjI5NyAwIDIuMTQ4IDIuMTQ4IDAgMCAwLTQuMjk3IDB6bTAgMTUuNzA0YTIuMTQ4IDIuMTQ4IDAgMSAwIDQuMjk3IDAgMi4xNDggMi4xNDggMCAwIDAtNC4yOTcgMHptMC03Ljg1MmEyLjE0OCAyLjE0OCAwIDEgMCA0LjI5NyAwIDIuMTQ4IDIuMTQ4IDAgMCAwLTQuMjk3IDB6Ii8+PC9zdmc+';

const dropdownSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTcuOTUgMTIuMzkgMi4wNiA0Ljc2bC43OS0uNjEgNS4xMSA2LjYyIDUuMjMtNi42My43OC42MnoiLz48L3N2Zz4=';

const externalLinkSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4xNiAwSDIwdjYuNzJoLTEuMDNWMS43NmwtNi40NiA2LjQ2LS43My0uNzMgNi40Ni02LjQ2aC01LjA4ek0wIDNoMTEuMDV2MS4wMkgxLjAzdjE0Ljk1aDE1VjguNTNoMS4wMlYyMEgweiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+';

const indeterminateSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0uNSAxMGgxOSIvPjwvc3ZnPg==';

const inputDateSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0xLjUgOC41aDE3bS0xMiAwdjltNy05djltLTEyLTZoMTdtLTE3IDNoMTdtLTE3LTEwaDE3djEzaC0xN3ptNi0xdjJhMSAxIDAgMCAxLTIgMHYtMmExIDEgMCAwIDEgMiAwWm03IDB2MmExIDEgMCAxIDEtMiAwdi0yYTEgMSAwIDEgMSAyIDBaIi8+PC9zdmc+';

const inputDatetimeLocalSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0xLjUgOC41aDE3bS0xMiAwdjltNy05djltLTEyLTZoMTdtLTE3IDNoMTdtLTE3LTEwaDE3djEzaC0xN3ptNi0xdjJhMSAxIDAgMCAxLTIgMHYtMmExIDEgMCAwIDEgMiAwWm03IDB2MmExIDEgMCAxIDEtMiAwdi0yYTEgMSAwIDEgMSAyIDBaIi8+PC9zdmc+';

const inputEmailSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0uNSAyLjVoMTltLTE5IDB2MTVoMTl2LTE1bS0xOSAwIDkuNSA4IDkuNS04Ii8+PC9zdmc+';

const inputMonthSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0xLjUgOC41aDE3bS0xMiAwdjltNy05djltLTEyLTZoMTdtLTE3IDNoMTdtLTE3LTEwaDE3djEzaC0xN3ptNi0xdjJhMSAxIDAgMCAxLTIgMHYtMmExIDEgMCAwIDEgMiAwWm03IDB2MmExIDEgMCAxIDEtMiAwdi0yYTEgMSAwIDEgMSAyIDBaIi8+PC9zdmc+';

const inputSearchSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTMuOTUgNi45NmgxYzAtMS4xMi45MS0yLjAyIDIuMDItMi4wMnYtMWMtMS42NyAwLTMuMDIgMS4zNi0zLjAyIDMuMDJabTEwLjA4IDYuMzZMOS45OSA5LjI4Yy42My0uNzkgMS4wMy0xLjc4IDEuMDMtMi44NmE0LjYgNC42IDAgMCAwLTQuNi00LjZjLTIuNTQgMC00LjYgMi4wNy00LjYgNC42czIuMDYgNC42IDQuNiA0LjZjMS4wOSAwIDIuMDgtLjQgMi44Ni0xLjAzbDQuMDQgNC4wNHptLTcuNjEtMy4zYy0xLjk5IDAtMy42LTEuNjItMy42LTMuNnMxLjYyLTMuNiAzLjYtMy42IDMuNiAxLjYyIDMuNiAzLjYtMS42MiAzLjYtMy42IDMuNloiLz48L3N2Zz4=';

const inputTelSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIzLjg2NCIgZD0ibTEgMTUuNTAyIDIuNDcyIDIuMjcyYy42Ni0uMDE3IDEuNDY4LTEuMjU0IDIuNTI4LTIuMjcyIDIuMDg2LTIuMDAyIDIuMzc2LTIuMDc1IDIuMTc2LTIuMjM1LjE2MS4yLTIuMDA2LTEuNDgxLTIuMDA2LTEuNDgxczEuNDkyLTEuNjczIDMuMzY4LTMuMDM2YTExNyAxMTcgMCAwIDEgMy40NDItMi40MDNsLjk5NCAyLjQwM3MuOTMzLS41MzYgMi42ODgtMi4wNThDMTguMjI3IDUuMzM3IDE5LjUgNC41NTQgMTkuNSA0LjU1NGwtMi0yLjU1MlMxMi44MiAxLjc5IDYuOTMzIDYuMjI4QzIuNTc0IDkuNTEzIDEgMTUuNTAyIDEgMTUuNTAyWiIvPjwvc3ZnPg==';

const inputTimeSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0ibTEzLjMxIDUgLjcxLS43MS0yLjMyLTIuMzItLjcxLjcxLjguOC0uNjQuNjRjLS44Ni0uNzEtMS45NS0xLjE2LTMuMTYtMS4xNlM1LjcgMy40IDQuODQgNC4xMWwtLjYzLS42My44LS44LS43MS0uNzEtMi4zMiAyLjMyLjcxLjcxLjgtLjguNjMuNjNhNC45NyA0Ljk3IDAgMCAwLTEuMTQgMy4xNGMwIDEuNjguODQgMy4xNiAyLjEyIDQuMDdsLTEuMjUgMS4yNS43MS43MSAxLjQ1LTEuNDVjLjYxLjI2IDEuMjguNDEgMS45OC40MXMxLjMxLS4xNCAxLjg5LS4zOGwxLjM2IDEuMzYuNzEtLjcxLTEuMTUtMS4xNWMxLjMyLS45IDIuMTktMi40MSAyLjE5LTQuMTMgMC0xLjE5LS40NC0yLjI3LTEuMTQtMy4xM2wuNjQtLjY0ek04IDExLjk3Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNFptLjQ5LTYuNTloLTF2Mi43OWwyLjE2IDIuMTYuNzEtLjcxLTEuODctMS44N3oiLz48L3N2Zz4=';

const inputUrlSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMC4wMS41djE5bTAtMTlhOS41IDkuNSAwIDAgMSA5LjUgOS41TTEwLjAxLjVDNS4zODcuNS41IDQuNS41IDEwLjVtOS41MS0xMHMtNS41MzcgMy01LjUzNyAxMC43MTZjMCA1LjI4NCA1LjUzNyA4LjI4NCA1LjUzNyA4LjI4NG0wLTE5czUuNDI2IDMgNS40MjYgMTAuNzE2YzAgNS4yODQtNS40MjYgOC4yODQtNS40MjYgOC4yODRtMCAwYy01LjA3OSAwLTkuMjI3LTMuOTg2LTkuNDg3LTkuMDAxTTEwLjAxIDE5LjVhOS41IDkuNSAwIDAgMCA5LjUtOS41bTAgMGMtLjc5NS4yNzctOS4wMSAzLjYwMy0xOS4wMTguMzgiLz48L3N2Zz4=';

const inputWeekSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Ik0xLjUgOC41aDE3bS0xMiAwdjltNy05djltLTEyLTZoMTdtLTE3IDNoMTdtLTE3LTEwaDE3djEzaC0xN3ptNi0xdjJhMSAxIDAgMCAxLTIgMHYtMmExIDEgMCAwIDEgMiAwWm03IDB2MmExIDEgMCAxIDEtMiAwdi0yYTEgMSAwIDEgMSAyIDBaIi8+PC9zdmc+';

const navigationSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0ibTQuNzcgMTMuOTctLjYyLS43OCA2LjYyLTUuMjMtNi42Mi01LjExLjYxLS43OSA3LjYzIDUuODl6Ii8+PC9zdmc+';

const nextSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGQ9Im01LjQ5NS41IDguNjY0IDguNjY0Yy40NjIuNDYyLjQ2MiAxLjIxIDAgMS42NzJMNS40OTUgMTkuNSIvPjwvc3ZnPg==';

const statusErrorSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0ibTExLjQzIDUuMjYtLjcxLS43LTIuNzQgMi43Ni0yLjczLTIuNzYtLjcxLjcgMi43NCAyLjc3LTIuNzQgMi43Ny43MS43MSAyLjczLTIuNzcgMi43NCAyLjc3LjcxLS43MS0yLjc0LTIuNzd6Ii8+PC9zdmc+';

const statusInfoSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNOSA0aDIuNDF2Mi4xNUg5em0uMTMgMTIuNTFWNy45N2gyLjE4djguNTR6Ii8+PC9zdmc+';

const statusWarningSvg = 'data:image/svg+xml;base64,PCEtLSBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiDCqSAyMDI1IFNjaG5laWRlciBFbGVjdHJpYyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMCAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNOS41NyAxMi40OGMtLjEzLS4xMi0uMi0uMjktLjIzLS41MmwtLjY3LTctLjAyLS4xOGMwLS4zNy4xMy0uNjcuMzktLjg5cy41OC0uMzMuOTgtLjMzLjcyLjExLjk4LjMzLjM5LjUyLjM5Ljg5bC0uMDIuMi0uNjcgNi45OGMtLjAyLjIzLS4xLjQtLjIzLjUyYS42NS42NSAwIDAgMS0uNDYuMTguNjUuNjUgMCAwIDEtLjQ2LS4xOHptLS41IDMuNTdhMS4zNCAxLjM0IDAgMCAxLS4zOC0uOTYgMS4zMiAxLjMyIDAgMCAxIDEuMzMtMS4zNWMuMzggMCAuNy4xMy45NS4zOXMuMzguNTguMzguOTZhMS4zMiAxLjMyIDAgMCAxLTEuMzMgMS4zNWMtLjM4IDAtLjctLjEzLS45NS0uMzlaIi8+PC9zdmc+';

// SPDX-FileCopyrightText: © 2024 Schneider Electric
const icons = {
    /* eslint-disable @typescript-eslint/naming-convention */
    clear: clearSvg,
    checked: checkedSvg,
    draggable: draggableSvg,
    dropdown: dropdownSvg,
    'external-link': externalLinkSvg,
    'external-new-tab-link': externalLinkSvg,
    indeterminate: indeterminateSvg,
    'input-month': inputMonthSvg,
    'input-tel': inputTelSvg,
    'input-week': inputWeekSvg,
    'input-url': inputUrlSvg,
    'input-time': inputTimeSvg,
    'input-date': inputDateSvg,
    'input-datetime-local': inputDatetimeLocalSvg,
    'input-email': inputEmailSvg,
    'input-search': inputSearchSvg,
    navigation: navigationSvg,
    next: nextSvg,
    'new-tab-link': externalLinkSvg,
    close: statusErrorSvg,
    'status-error': statusErrorSvg,
    'status-info': statusInfoSvg,
    'status-success': checkedSvg,
    'status-warning': statusWarningSvg,
    /* eslint-enable @typescript-eslint/naming-convention */
};
const coreLibrary = {
    name: 'core',
    resolver: (name) => icons[name] ?? '',
};

// SPDX-FileCopyrightText: © 2024 Schneider Electric
const library = {
    name: 'default',
    resolver: (name) => getAssetPath(`/icons/${name}.svg`),
};

// SPDX-FileCopyrightText: © 2024 Schneider Electric
let registry = [library, coreLibrary];
/**
 * Returns a library from the registry.
 */
const getIconLibrary = (name) => registry.find((library) => library.name === name);
/**
 * Removes an icon library from the registry.
 */
const unregisterIconLibrary = (name) => {
    registry = registry.filter((library) => library.name !== name);
};
/**
 * Adds an icon library to the registry or overrides an existing one.
 */
const registerIconLibrary = (name, options) => {
    unregisterIconLibrary(name);
    registry.push({
        name,
        ...options,
    });
};

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
const cachedIconRequests = new Map();
const requestIcon = (url) => {
    const cachedIconRequest = cachedIconRequests.get(url);
    if (cachedIconRequest)
        return Promise.resolve(cachedIconRequest);
    const iconPromise = fetch(url, { mode: 'cors' }).then(async (response) => {
        const iconResponse = {
            ok: response.ok,
            status: response.status,
            data: await response.text(),
        };
        if (response.ok) {
            const div = document.createElement('div');
            div.innerHTML = iconResponse.data;
            const child = div.firstElementChild;
            iconResponse.data =
                child?.tagName.toLowerCase() === 'svg' ? child.outerHTML : '';
        }
        cachedIconRequests.set(url, iconResponse);
        return iconResponse;
    });
    cachedIconRequests.set(url, iconPromise);
    return iconPromise;
};

const iconCss = ":host([hidden]){display:none!important}:host{display:inline-block;height:1em;width:1em}.qds-container{position:relative}.qds-icon-wrapper{display:contents}svg{display:block;fill:currentcolor;height:100%;width:100%}.qds-click-target{height:var(--qds-experimental-icon-click-target-size);left:calc((var(--qds-experimental-icon-click-target-size) - 100%)*-1/2);position:absolute;top:calc((var(--qds-experimental-icon-click-target-size) - 100%)*-1/2);width:var(--qds-experimental-icon-click-target-size)}";
const QdsIconStyle0 = iconCss;

// SPDX-FileCopyrightText: © 2024 Schneider Electric
//
// SPDX-License-Identifier: Apache-2.0
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Icon_inheritedAttributes;
let parser;
const Icon = /*@__PURE__*/ proxyCustomElement(class Icon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.loadEmitter = createEvent(this, "qdsLoad", 6);
        this.errorEmitter = createEvent(this, "qdsError", 6);
        /**
         * The name of a registered icon library.
         */
        this.library = 'default';
        this.svg = '';
        _Icon_inheritedAttributes.set(this, {});
    }
    async setIcon() {
        if (!this.name)
            return;
        const library = getIconLibrary(this.library);
        if (!library)
            return;
        const url = library.resolver(this.name);
        if (!url) {
            this.svg = '';
            return;
        }
        try {
            const request = await requestIcon(url);
            if (!request.ok) {
                this.svg = '';
                this.errorEmitter.emit();
                return;
            }
            // Create an instance of the DOM parser. We do it here instead of at the
            // top-level to support SSR while maintaining a single parser instance
            // for optimal performance.
            parser || (parser = new DOMParser());
            const document = parser.parseFromString(request.data, 'text/html');
            const svgElement = document.body.querySelector('svg');
            if (svgElement === null) {
                this.svg = '';
                this.errorEmitter.emit();
            }
            else {
                for (const [key, value] of Object.entries(__classPrivateFieldGet(this, _Icon_inheritedAttributes, "f")))
                    if (value !== undefined)
                        svgElement.setAttribute(key, value);
                this.svg = svgElement.outerHTML;
                this.loadEmitter.emit();
            }
        }
        catch {
            this.errorEmitter.emit();
        }
    }
    async componentWillLoad() {
        __classPrivateFieldSet(this, _Icon_inheritedAttributes, inheritAriaAttributes(this.host), "f");
        await this.setIcon();
    }
    render() {
        return (h("div", { key: '70a230b844d56b3c3546fe243c71e8ab93847aca', class: "qds-container" }, h("span", { key: '88b003880fb54fd138cfad5c670030cb9f4cfdc4', class: "qds-icon-wrapper", innerHTML: this.svg }), h("div", { key: 'e0e911ad95b588c5676be368f39d82c0511e966e', class: "qds-click-target" })));
    }
    get host() { return this; }
    static get watchers() { return {
        "name": ["setIcon"],
        "library": ["setIcon"]
    }; }
    static get style() { return QdsIconStyle0; }
}, [1, "qds-icon", {
        "name": [1],
        "library": [1],
        "svg": [32]
    }, undefined, {
        "name": ["setIcon"],
        "library": ["setIcon"]
    }]);
_Icon_inheritedAttributes = new WeakMap();
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["qds-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "qds-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Icon);
            }
            break;
    } });
}

export { Icon as I, defineCustomElement as d, registerIconLibrary as r, unregisterIconLibrary as u };

//# sourceMappingURL=p-ba880369.js.map
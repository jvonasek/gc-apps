import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseIcon } from './BaseIcon';

@customElement('icon-route')
export class RouteIcon extends BaseIcon {
  render() {
    return html`
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_11726_2306" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4476 0.471447C16.7395 0.177576 17.2144 0.175987 17.5083 0.467898L20.5286 3.46802L21.0642 4.00012L20.5286 4.53223L17.5083 7.53235C17.2144 7.82426 16.7395 7.82267 16.4476 7.5288C16.1557 7.23493 16.1573 6.76006 16.4512 6.46815L18.188 4.74295L15.0654 4.73057L13.5841 5.33827C11.8062 6.06767 10.4086 7.41481 9.59828 9.07121C10.1523 9.53074 10.5051 10.2243 10.5051 11.0003C10.5051 12.3839 9.38346 13.5056 7.99986 13.5056C6.61626 13.5056 5.49463 12.3839 5.49463 11.0003C5.49463 9.61675 6.61626 8.49512 7.99986 8.49512C8.06951 8.49512 8.1385 8.49796 8.20671 8.50354C8.93329 6.9759 10.0753 5.66253 11.521 4.72998H5.4225C5.10924 5.77105 4.14321 6.52941 3.00006 6.52941C1.60313 6.52941 0.470703 5.39698 0.470703 4.00006C0.470703 2.60313 1.60313 1.4707 3.00006 1.4707C4.12846 1.4707 5.08428 2.20962 5.41005 3.22998H14.9189H14.9219L18.1734 3.24288L16.4512 1.5321C16.1573 1.24019 16.1557 0.765319 16.4476 0.471447Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.4476 0.471447C16.7395 0.177576 17.2144 0.175987 17.5083 0.467898L20.5286 3.46802L21.0642 4.00012L20.5286 4.53223L17.5083 7.53235C17.2144 7.82426 16.7395 7.82267 16.4476 7.5288C16.1557 7.23493 16.1573 6.76006 16.4512 6.46815L18.188 4.74295L15.0654 4.73057L13.5841 5.33827C11.8062 6.06767 10.4086 7.41481 9.59828 9.07121C10.1523 9.53074 10.5051 10.2243 10.5051 11.0003C10.5051 12.3839 9.38346 13.5056 7.99986 13.5056C6.61626 13.5056 5.49463 12.3839 5.49463 11.0003C5.49463 9.61675 6.61626 8.49512 7.99986 8.49512C8.06951 8.49512 8.1385 8.49796 8.20671 8.50354C8.93329 6.9759 10.0753 5.66253 11.521 4.72998H5.4225C5.10924 5.77105 4.14321 6.52941 3.00006 6.52941C1.60313 6.52941 0.470703 5.39698 0.470703 4.00006C0.470703 2.60313 1.60313 1.4707 3.00006 1.4707C4.12846 1.4707 5.08428 2.20962 5.41005 3.22998H14.9189H14.9219L18.1734 3.24288L16.4512 1.5321C16.1573 1.24019 16.1557 0.765319 16.4476 0.471447Z"
          fill="#211F24"
        />
        <path
          d="M17.5083 0.467898L16.4512 1.5321L16.4512 1.5321L17.5083 0.467898ZM16.4476 0.471447L15.3834 -0.585657V-0.585657L16.4476 0.471447ZM20.5286 3.46802L21.5857 2.40382V2.40382L20.5286 3.46802ZM21.0642 4.00012L22.1213 5.06433L23.1927 4.00012L22.1213 2.93592L21.0642 4.00012ZM20.5286 4.53223L21.5857 5.59643V5.59643L20.5286 4.53223ZM17.5083 7.53235L16.4512 6.46815L16.4512 6.46815L17.5083 7.53235ZM16.4476 7.5288L17.5118 6.4717V6.4717L16.4476 7.5288ZM16.4512 6.46815L15.3941 5.40394L15.3941 5.40395L16.4512 6.46815ZM18.188 4.74295L19.2451 5.80715L21.812 3.2573L18.1939 3.24296L18.188 4.74295ZM15.0654 4.73057L15.0713 3.23058L14.7725 3.22939L14.496 3.34281L15.0654 4.73057ZM13.5841 5.33827L13.0147 3.95052V3.95052L13.5841 5.33827ZM9.59828 9.07121L8.25087 8.41205L7.73223 9.47222L8.64062 10.2257L9.59828 9.07121ZM8.20671 8.50354L8.08452 9.99855L9.11655 10.0829L9.5613 9.14781L8.20671 8.50354ZM11.521 4.72998L12.3341 5.9905L16.6137 3.22998H11.521V4.72998ZM5.4225 4.72998V3.22998H4.30741L3.98611 4.29777L5.4225 4.72998ZM5.41005 3.22998L3.98111 3.68619L4.31435 4.72998H5.41005V3.22998ZM14.9219 3.22998L14.9278 1.72998H14.9219V3.22998ZM18.1734 3.24288L18.1675 4.74287L21.8266 4.75738L19.2305 2.17867L18.1734 3.24288ZM16.4512 1.5321L15.3941 2.5963L15.3941 2.5963L16.4512 1.5321ZM18.5654 -0.596304C17.6838 -1.47204 16.2592 -1.46727 15.3834 -0.585657L17.5118 1.52855C17.2199 1.82242 16.7451 1.82401 16.4512 1.5321L18.5654 -0.596304ZM21.5857 2.40382L18.5654 -0.596305L16.4512 1.5321L19.4714 4.53223L21.5857 2.40382ZM22.1213 2.93592L21.5857 2.40382L19.4714 4.53223L20.0071 5.06433L22.1213 2.93592ZM21.5857 5.59643L22.1213 5.06433L20.0071 2.93592L19.4714 3.46802L21.5857 5.59643ZM18.5654 8.59655L21.5857 5.59643L19.4714 3.46802L16.4512 6.46815L18.5654 8.59655ZM15.3834 8.58591C16.2592 9.46752 17.6838 9.47229 18.5654 8.59655L16.4512 6.46815C16.7451 6.17624 17.2199 6.17783 17.5118 6.4717L15.3834 8.58591ZM15.3941 5.40395C14.5125 6.27968 14.5077 7.70429 15.3834 8.58591L17.5118 6.4717C17.8037 6.76557 17.8022 7.24044 17.5083 7.53235L15.3941 5.40395ZM17.1309 3.67874L15.3941 5.40394L17.5083 7.53235L19.2451 5.80715L17.1309 3.67874ZM15.0594 6.23056L18.182 6.24294L18.1939 3.24296L15.0713 3.23058L15.0594 6.23056ZM14.1534 6.72602L15.6347 6.11832L14.496 3.34281L13.0147 3.95052L14.1534 6.72602ZM10.9457 9.73038C11.5982 8.39647 12.7229 7.3129 14.1534 6.72602L13.0147 3.95052C10.8894 4.82244 9.21896 6.43316 8.25087 8.41205L10.9457 9.73038ZM8.64062 10.2257C8.86578 10.4125 9.00509 10.6895 9.00509 11.0003H12.0051C12.0051 9.75919 11.4387 8.64899 10.5559 7.9167L8.64062 10.2257ZM9.00509 11.0003C9.00509 11.5555 8.55503 12.0056 7.99986 12.0056V15.0056C10.2119 15.0056 12.0051 13.2124 12.0051 11.0003H9.00509ZM7.99986 12.0056C7.44469 12.0056 6.99463 11.5555 6.99463 11.0003H3.99463C3.99463 13.2124 5.78783 15.0056 7.99986 15.0056V12.0056ZM6.99463 11.0003C6.99463 10.4452 7.44469 9.99512 7.99986 9.99512V6.99512C5.78783 6.99512 3.99463 8.78832 3.99463 11.0003H6.99463ZM7.99986 9.99512C8.02865 9.99512 8.05687 9.99629 8.08452 9.99855L8.3289 7.00852C8.22012 6.99963 8.11037 6.99512 7.99986 6.99512V9.99512ZM10.7079 3.46947C9.0253 4.55484 7.69707 6.08275 6.85212 7.85926L9.5613 9.14781C10.1695 7.86905 11.1253 6.77023 12.3341 5.9905L10.7079 3.46947ZM5.4225 6.22998H11.521V3.22998H5.4225V6.22998ZM3.00006 8.02941C4.82337 8.02941 6.36018 6.81953 6.85888 5.16219L3.98611 4.29777C3.85829 4.72257 3.46305 5.02941 3.00006 5.02941V8.02941ZM-1.0293 4.00006C-1.0293 6.22541 0.774706 8.02941 3.00006 8.02941V5.02941C2.43156 5.02941 1.9707 4.56855 1.9707 4.00006H-1.0293ZM3.00006 -0.0292969C0.774706 -0.0292969 -1.0293 1.77471 -1.0293 4.00006H1.9707C1.9707 3.43156 2.43156 2.9707 3.00006 2.9707V-0.0292969ZM6.83899 2.77377C6.32049 1.14975 4.79992 -0.0292969 3.00006 -0.0292969V2.9707C3.45699 2.9707 3.84807 3.26949 3.98111 3.68619L6.83899 2.77377ZM14.9189 1.72998H5.41005V4.72998H14.9189V1.72998ZM14.9219 1.72998H14.9189V4.72998H14.9219V1.72998ZM18.1794 1.74289L14.9278 1.72999L14.9159 4.72997L18.1675 4.74287L18.1794 1.74289ZM15.3941 2.5963L17.1163 4.30708L19.2305 2.17867L17.5083 0.467898L15.3941 2.5963ZM15.3834 -0.585657C14.5077 0.295957 14.5125 1.72057 15.3941 2.5963L17.5083 0.467899C17.8022 0.759811 17.8037 1.23468 17.5118 1.52855L15.3834 -0.585657Z"
          fill="url(#paint0_linear_11726_2306)"
          mask="url(#path-1-inside-1_11726_2306)"
        />
        <path
          d="M17.5083 0.467898L16.4512 1.5321L16.4512 1.5321L17.5083 0.467898ZM16.4476 0.471447L15.3834 -0.585657V-0.585657L16.4476 0.471447ZM20.5286 3.46802L21.5857 2.40382V2.40382L20.5286 3.46802ZM21.0642 4.00012L22.1213 5.06433L23.1927 4.00012L22.1213 2.93592L21.0642 4.00012ZM20.5286 4.53223L21.5857 5.59643V5.59643L20.5286 4.53223ZM17.5083 7.53235L16.4512 6.46815L16.4512 6.46815L17.5083 7.53235ZM16.4476 7.5288L17.5118 6.4717V6.4717L16.4476 7.5288ZM16.4512 6.46815L15.3941 5.40394L15.3941 5.40395L16.4512 6.46815ZM18.188 4.74295L19.2451 5.80715L21.812 3.2573L18.1939 3.24296L18.188 4.74295ZM15.0654 4.73057L15.0713 3.23058L14.7725 3.22939L14.496 3.34281L15.0654 4.73057ZM13.5841 5.33827L13.0147 3.95052V3.95052L13.5841 5.33827ZM9.59828 9.07121L8.25087 8.41205L7.73223 9.47222L8.64062 10.2257L9.59828 9.07121ZM8.20671 8.50354L8.08452 9.99855L9.11655 10.0829L9.5613 9.14781L8.20671 8.50354ZM11.521 4.72998L12.3341 5.9905L16.6137 3.22998H11.521V4.72998ZM5.4225 4.72998V3.22998H4.30741L3.98611 4.29777L5.4225 4.72998ZM5.41005 3.22998L3.98111 3.68619L4.31435 4.72998H5.41005V3.22998ZM14.9219 3.22998L14.9278 1.72998H14.9219V3.22998ZM18.1734 3.24288L18.1675 4.74287L21.8266 4.75738L19.2305 2.17867L18.1734 3.24288ZM16.4512 1.5321L15.3941 2.5963L15.3941 2.5963L16.4512 1.5321ZM18.5654 -0.596304C17.6838 -1.47204 16.2592 -1.46727 15.3834 -0.585657L17.5118 1.52855C17.2199 1.82242 16.7451 1.82401 16.4512 1.5321L18.5654 -0.596304ZM21.5857 2.40382L18.5654 -0.596305L16.4512 1.5321L19.4714 4.53223L21.5857 2.40382ZM22.1213 2.93592L21.5857 2.40382L19.4714 4.53223L20.0071 5.06433L22.1213 2.93592ZM21.5857 5.59643L22.1213 5.06433L20.0071 2.93592L19.4714 3.46802L21.5857 5.59643ZM18.5654 8.59655L21.5857 5.59643L19.4714 3.46802L16.4512 6.46815L18.5654 8.59655ZM15.3834 8.58591C16.2592 9.46752 17.6838 9.47229 18.5654 8.59655L16.4512 6.46815C16.7451 6.17624 17.2199 6.17783 17.5118 6.4717L15.3834 8.58591ZM15.3941 5.40395C14.5125 6.27968 14.5077 7.70429 15.3834 8.58591L17.5118 6.4717C17.8037 6.76557 17.8022 7.24044 17.5083 7.53235L15.3941 5.40395ZM17.1309 3.67874L15.3941 5.40394L17.5083 7.53235L19.2451 5.80715L17.1309 3.67874ZM15.0594 6.23056L18.182 6.24294L18.1939 3.24296L15.0713 3.23058L15.0594 6.23056ZM14.1534 6.72602L15.6347 6.11832L14.496 3.34281L13.0147 3.95052L14.1534 6.72602ZM10.9457 9.73038C11.5982 8.39647 12.7229 7.3129 14.1534 6.72602L13.0147 3.95052C10.8894 4.82244 9.21896 6.43316 8.25087 8.41205L10.9457 9.73038ZM8.64062 10.2257C8.86578 10.4125 9.00509 10.6895 9.00509 11.0003H12.0051C12.0051 9.75919 11.4387 8.64899 10.5559 7.9167L8.64062 10.2257ZM9.00509 11.0003C9.00509 11.5555 8.55503 12.0056 7.99986 12.0056V15.0056C10.2119 15.0056 12.0051 13.2124 12.0051 11.0003H9.00509ZM7.99986 12.0056C7.44469 12.0056 6.99463 11.5555 6.99463 11.0003H3.99463C3.99463 13.2124 5.78783 15.0056 7.99986 15.0056V12.0056ZM6.99463 11.0003C6.99463 10.4452 7.44469 9.99512 7.99986 9.99512V6.99512C5.78783 6.99512 3.99463 8.78832 3.99463 11.0003H6.99463ZM7.99986 9.99512C8.02865 9.99512 8.05687 9.99629 8.08452 9.99855L8.3289 7.00852C8.22012 6.99963 8.11037 6.99512 7.99986 6.99512V9.99512ZM10.7079 3.46947C9.0253 4.55484 7.69707 6.08275 6.85212 7.85926L9.5613 9.14781C10.1695 7.86905 11.1253 6.77023 12.3341 5.9905L10.7079 3.46947ZM5.4225 6.22998H11.521V3.22998H5.4225V6.22998ZM3.00006 8.02941C4.82337 8.02941 6.36018 6.81953 6.85888 5.16219L3.98611 4.29777C3.85829 4.72257 3.46305 5.02941 3.00006 5.02941V8.02941ZM-1.0293 4.00006C-1.0293 6.22541 0.774706 8.02941 3.00006 8.02941V5.02941C2.43156 5.02941 1.9707 4.56855 1.9707 4.00006H-1.0293ZM3.00006 -0.0292969C0.774706 -0.0292969 -1.0293 1.77471 -1.0293 4.00006H1.9707C1.9707 3.43156 2.43156 2.9707 3.00006 2.9707V-0.0292969ZM6.83899 2.77377C6.32049 1.14975 4.79992 -0.0292969 3.00006 -0.0292969V2.9707C3.45699 2.9707 3.84807 3.26949 3.98111 3.68619L6.83899 2.77377ZM14.9189 1.72998H5.41005V4.72998H14.9189V1.72998ZM14.9219 1.72998H14.9189V4.72998H14.9219V1.72998ZM18.1794 1.74289L14.9278 1.72999L14.9159 4.72997L18.1675 4.74287L18.1794 1.74289ZM15.3941 2.5963L17.1163 4.30708L19.2305 2.17867L17.5083 0.467898L15.3941 2.5963ZM15.3834 -0.585657C14.5077 0.295957 14.5125 1.72057 15.3941 2.5963L17.5083 0.467899C17.8022 0.759811 17.8037 1.23468 17.5118 1.52855L15.3834 -0.585657Z"
          fill="url(#paint1_linear_11726_2306)"
          mask="url(#path-1-inside-1_11726_2306)"
        />
        <path
          d="M17.5083 0.467898L16.4512 1.5321L16.4512 1.5321L17.5083 0.467898ZM16.4476 0.471447L15.3834 -0.585657V-0.585657L16.4476 0.471447ZM20.5286 3.46802L21.5857 2.40382V2.40382L20.5286 3.46802ZM21.0642 4.00012L22.1213 5.06433L23.1927 4.00012L22.1213 2.93592L21.0642 4.00012ZM20.5286 4.53223L21.5857 5.59643V5.59643L20.5286 4.53223ZM17.5083 7.53235L16.4512 6.46815L16.4512 6.46815L17.5083 7.53235ZM16.4476 7.5288L17.5118 6.4717V6.4717L16.4476 7.5288ZM16.4512 6.46815L15.3941 5.40394L15.3941 5.40395L16.4512 6.46815ZM18.188 4.74295L19.2451 5.80715L21.812 3.2573L18.1939 3.24296L18.188 4.74295ZM15.0654 4.73057L15.0713 3.23058L14.7725 3.22939L14.496 3.34281L15.0654 4.73057ZM13.5841 5.33827L13.0147 3.95052V3.95052L13.5841 5.33827ZM9.59828 9.07121L8.25087 8.41205L7.73223 9.47222L8.64062 10.2257L9.59828 9.07121ZM8.20671 8.50354L8.08452 9.99855L9.11655 10.0829L9.5613 9.14781L8.20671 8.50354ZM11.521 4.72998L12.3341 5.9905L16.6137 3.22998H11.521V4.72998ZM5.4225 4.72998V3.22998H4.30741L3.98611 4.29777L5.4225 4.72998ZM5.41005 3.22998L3.98111 3.68619L4.31435 4.72998H5.41005V3.22998ZM14.9219 3.22998L14.9278 1.72998H14.9219V3.22998ZM18.1734 3.24288L18.1675 4.74287L21.8266 4.75738L19.2305 2.17867L18.1734 3.24288ZM16.4512 1.5321L15.3941 2.5963L15.3941 2.5963L16.4512 1.5321ZM18.5654 -0.596304C17.6838 -1.47204 16.2592 -1.46727 15.3834 -0.585657L17.5118 1.52855C17.2199 1.82242 16.7451 1.82401 16.4512 1.5321L18.5654 -0.596304ZM21.5857 2.40382L18.5654 -0.596305L16.4512 1.5321L19.4714 4.53223L21.5857 2.40382ZM22.1213 2.93592L21.5857 2.40382L19.4714 4.53223L20.0071 5.06433L22.1213 2.93592ZM21.5857 5.59643L22.1213 5.06433L20.0071 2.93592L19.4714 3.46802L21.5857 5.59643ZM18.5654 8.59655L21.5857 5.59643L19.4714 3.46802L16.4512 6.46815L18.5654 8.59655ZM15.3834 8.58591C16.2592 9.46752 17.6838 9.47229 18.5654 8.59655L16.4512 6.46815C16.7451 6.17624 17.2199 6.17783 17.5118 6.4717L15.3834 8.58591ZM15.3941 5.40395C14.5125 6.27968 14.5077 7.70429 15.3834 8.58591L17.5118 6.4717C17.8037 6.76557 17.8022 7.24044 17.5083 7.53235L15.3941 5.40395ZM17.1309 3.67874L15.3941 5.40394L17.5083 7.53235L19.2451 5.80715L17.1309 3.67874ZM15.0594 6.23056L18.182 6.24294L18.1939 3.24296L15.0713 3.23058L15.0594 6.23056ZM14.1534 6.72602L15.6347 6.11832L14.496 3.34281L13.0147 3.95052L14.1534 6.72602ZM10.9457 9.73038C11.5982 8.39647 12.7229 7.3129 14.1534 6.72602L13.0147 3.95052C10.8894 4.82244 9.21896 6.43316 8.25087 8.41205L10.9457 9.73038ZM8.64062 10.2257C8.86578 10.4125 9.00509 10.6895 9.00509 11.0003H12.0051C12.0051 9.75919 11.4387 8.64899 10.5559 7.9167L8.64062 10.2257ZM9.00509 11.0003C9.00509 11.5555 8.55503 12.0056 7.99986 12.0056V15.0056C10.2119 15.0056 12.0051 13.2124 12.0051 11.0003H9.00509ZM7.99986 12.0056C7.44469 12.0056 6.99463 11.5555 6.99463 11.0003H3.99463C3.99463 13.2124 5.78783 15.0056 7.99986 15.0056V12.0056ZM6.99463 11.0003C6.99463 10.4452 7.44469 9.99512 7.99986 9.99512V6.99512C5.78783 6.99512 3.99463 8.78832 3.99463 11.0003H6.99463ZM7.99986 9.99512C8.02865 9.99512 8.05687 9.99629 8.08452 9.99855L8.3289 7.00852C8.22012 6.99963 8.11037 6.99512 7.99986 6.99512V9.99512ZM10.7079 3.46947C9.0253 4.55484 7.69707 6.08275 6.85212 7.85926L9.5613 9.14781C10.1695 7.86905 11.1253 6.77023 12.3341 5.9905L10.7079 3.46947ZM5.4225 6.22998H11.521V3.22998H5.4225V6.22998ZM3.00006 8.02941C4.82337 8.02941 6.36018 6.81953 6.85888 5.16219L3.98611 4.29777C3.85829 4.72257 3.46305 5.02941 3.00006 5.02941V8.02941ZM-1.0293 4.00006C-1.0293 6.22541 0.774706 8.02941 3.00006 8.02941V5.02941C2.43156 5.02941 1.9707 4.56855 1.9707 4.00006H-1.0293ZM3.00006 -0.0292969C0.774706 -0.0292969 -1.0293 1.77471 -1.0293 4.00006H1.9707C1.9707 3.43156 2.43156 2.9707 3.00006 2.9707V-0.0292969ZM6.83899 2.77377C6.32049 1.14975 4.79992 -0.0292969 3.00006 -0.0292969V2.9707C3.45699 2.9707 3.84807 3.26949 3.98111 3.68619L6.83899 2.77377ZM14.9189 1.72998H5.41005V4.72998H14.9189V1.72998ZM14.9219 1.72998H14.9189V4.72998H14.9219V1.72998ZM18.1794 1.74289L14.9278 1.72999L14.9159 4.72997L18.1675 4.74287L18.1794 1.74289ZM15.3941 2.5963L17.1163 4.30708L19.2305 2.17867L17.5083 0.467898L15.3941 2.5963ZM15.3834 -0.585657C14.5077 0.295957 14.5125 1.72057 15.3941 2.5963L17.5083 0.467899C17.8022 0.759811 17.8037 1.23468 17.5118 1.52855L15.3834 -0.585657Z"
          fill="url(#paint2_linear_11726_2306)"
          mask="url(#path-1-inside-1_11726_2306)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11726_2306"
            x1="0.733041"
            y1="-7.6205"
            x2="21.9168"
            y2="-7.6205"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFCE4F" />
            <stop offset="1" stop-color="#4FFFB0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_11726_2306"
            x1="0.733041"
            y1="-7.6205"
            x2="21.9168"
            y2="-7.6205"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4FFFB0" />
            <stop offset="0.505223" stop-color="#A2FF76" />
            <stop offset="1" stop-color="#FF984E" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_11726_2306"
            x1="0.733041"
            y1="-7.6205"
            x2="21.9168"
            y2="-7.6205"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4FFFB0" />
            <stop offset="0.463556" stop-color="#B3FF8F" />
            <stop offset="1" stop-color="#FF984E" />
          </linearGradient>
        </defs>
      </svg>
    `;
  }
}

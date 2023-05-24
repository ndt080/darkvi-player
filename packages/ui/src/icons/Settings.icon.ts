import { Icon, IconProps } from './Icon';

export function SettingsIcon(props: IconProps) {
  return Icon({
    ...props,
    viewBox: '0 0 28 28',
    children: `
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M18.1606 3.54372C18.0178 2.97676 17.7455 2.02333 16.9807 1.32655C16.3436 0.746195 15.5308 0.510328 14.6859 0.504176C14.2573 0.504096 13.8247 0.521049 13.3965 0.503194C13.2175 0.495732 12.1079 0.449458 11.1754 1.18988C10.2772 1.9031 9.98204 2.95958 9.8349 3.54372C9.78228 3.75266 9.68817 4.01725 9.56253 4.28848C9.27715 4.41104 8.99798 4.54501 8.7256 4.68982C8.44158 4.61634 8.1829 4.52438 7.99031 4.4354C7.44172 4.18191 6.43976 3.74981 5.32672 3.9915C4.16209 4.24438 3.49707 5.13121 3.38799 5.27668C3.1534 5.58952 2.89223 5.88552 2.64502 6.18852C2.60455 6.23813 1.76926 7.10322 1.76165 8.3753C1.75477 9.52594 2.39952 10.4202 2.76133 10.8974C2.89792 11.0775 3.05235 11.329 3.18926 11.6085C3.1135 11.8882 3.04843 12.1722 2.99451 12.4599C2.75167 12.6472 2.50678 12.8023 2.30776 12.9031C1.77257 13.1742 0.804217 13.6943 0.304883 14.726C-0.219512 15.8094 0.0814571 16.8908 0.128413 17.0595C0.234477 17.4406 0.325263 17.8328 0.398692 18.2215C0.431904 18.3973 0.639026 19.4935 1.58182 20.2336C2.47927 20.9381 3.57242 20.9848 4.17472 20.9957C4.39415 20.9996 4.67705 21.0312 4.97343 21.092C5.15354 21.3356 5.34333 21.5717 5.54223 21.7995C5.53392 22.0859 5.50234 22.3524 5.459 22.5554C5.33375 23.1421 5.13055 24.2247 5.62619 25.2635C6.14176 26.3441 7.1683 26.7879 7.32924 26.8574C7.69467 27.0154 8.05893 27.1926 8.40986 27.3806C8.57022 27.4665 9.54547 27.9888 10.7054 27.7302C11.8196 27.4818 12.5468 26.6667 12.9373 26.2055C13.0841 26.0321 13.2981 25.8243 13.5446 25.627C13.8454 25.639 14.1501 25.639 14.4509 25.627C14.6974 25.8243 14.9114 26.0321 15.0582 26.2055C15.4487 26.6667 16.1759 27.4818 17.2901 27.7302C18.45 27.9888 19.4253 27.4665 19.5857 27.3806C19.9367 27.1926 20.3008 27.0155 20.6663 26.8574C20.8272 26.7879 21.8538 26.3441 22.3693 25.2635C22.865 24.2247 22.6618 23.1421 22.5365 22.5554C22.4932 22.3524 22.4616 22.0859 22.4533 21.7995C22.6522 21.5717 22.842 21.3357 23.0221 21.092C23.3185 21.0312 23.6014 20.9996 23.8208 20.9957C24.4231 20.9848 25.5162 20.9381 26.4137 20.2336C27.3565 19.4935 27.5636 18.3973 27.5968 18.2215C27.6703 17.8327 27.761 17.4406 27.8671 17.0595C27.9141 16.8907 28.215 15.8094 27.6906 14.7259C27.1913 13.6943 26.2229 13.1742 25.6878 12.9031C25.4887 12.8023 25.2439 12.6473 25.001 12.4599C24.9471 12.1722 24.882 11.8882 24.8063 11.6085C24.9432 11.329 25.0976 11.0775 25.2342 10.8974C25.596 10.4202 26.2407 9.52594 26.2339 8.3753C26.2263 7.10322 25.391 6.23812 25.3505 6.18852L24.6211 5.29449C24.5759 5.23906 23.9027 4.25943 22.6688 3.9915C21.5558 3.74981 20.5538 4.18191 20.0052 4.4354C19.8126 4.52438 19.5539 4.61634 19.2699 4.68982C18.9975 4.54501 18.7184 4.41103 18.433 4.28848C18.3073 4.01725 18.2132 3.75266 18.1606 3.54372ZM22.684 6.8749L23.4134 7.76893C23.7781 8.21595 23.9605 8.43946 23.2421 9.38694C22.8377 9.92022 22.4063 10.7098 22.156 11.5222C22.4123 12.2116 22.5823 12.9425 22.6532 13.7019C23.2346 14.3165 23.964 14.8324 24.5581 15.1333C25.6223 15.6723 25.5571 15.9525 25.4267 16.513L25.166 17.6339C25.0356 18.1944 24.9704 18.4746 23.7759 18.4961C23.1155 18.5079 22.2425 18.6516 21.4545 18.9452C21.0542 19.6064 20.5672 20.21 20.0091 20.7405C19.8997 21.5659 19.9552 22.4383 20.0916 23.0773C20.3393 24.2374 20.0788 24.3635 19.558 24.6156L18.5162 25.1199C17.9953 25.3721 17.7349 25.4981 16.9664 24.5902C16.5354 24.0812 15.8609 23.4888 15.1229 23.0644C14.3863 23.1589 13.6092 23.1589 12.8726 23.0644C12.1347 23.4888 11.4601 24.0812 11.0291 24.5902C10.2606 25.4981 10.0002 25.3721 9.4793 25.1199L8.43756 24.6156C7.91669 24.3635 7.65625 24.2374 7.9039 23.0773C8.04032 22.4383 8.09578 21.5659 7.98642 20.7405C7.42829 20.21 6.94129 19.6064 6.54103 18.9452C5.75297 18.6516 4.88005 18.5079 4.2196 18.4961C3.02507 18.4746 2.95989 18.1944 2.82952 17.6339L2.56879 16.513C2.43843 15.9525 2.37325 15.6723 3.43741 15.1333C4.03149 14.8324 4.76093 14.3165 5.34233 13.7019C5.41322 12.9425 5.58327 12.2116 5.83949 11.5222C5.58927 10.7098 5.15778 9.92022 4.75344 9.38694C4.03504 8.43946 4.2174 8.21595 4.5821 7.76893L5.31152 6.8749C5.67622 6.42788 5.85858 6.20438 6.94168 6.70484C7.53525 6.97911 8.37361 7.22784 9.20438 7.30908C9.84531 6.88781 10.5458 6.54861 11.2906 6.30657C11.759 5.60868 12.0983 4.7929 12.2592 4.15434C12.5489 3.00394 12.8387 3.00394 13.4182 3.00394L14.6766 3.00417C15.1909 3.00792 15.4636 3.07161 15.7363 4.15434C15.8972 4.7929 16.2366 5.60868 16.705 6.30657C17.4497 6.54861 18.1502 6.88781 18.7911 7.30908C19.6219 7.22784 20.4603 6.97911 21.0538 6.70484C22.1369 6.20438 22.3193 6.42788 22.684 6.8749Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M19.9978 14.5039C19.9978 17.8176 17.3115 20.5039 13.9978 20.5039C10.684 20.5039 7.99776 17.8176 7.99776 14.5039C7.99776 11.1902 10.684 8.50394 13.9978 8.50394C17.3115 8.50394 19.9978 11.1902 19.9978 14.5039ZM13.9978 18.0039C15.9308 18.0039 17.4978 16.4369 17.4978 14.5039C17.4978 12.5709 15.9308 11.0039 13.9978 11.0039C12.0648 11.0039 10.4978 12.5709 10.4978 14.5039C10.4978 16.4369 12.0648 18.0039 13.9978 18.0039Z'
        fill='white'
      />
  `,
  });
}

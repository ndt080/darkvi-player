import { Icon, IconProps } from '@/icons/Icon';

export function PipIcon(props: IconProps) {
  return Icon({
    ...props,
    viewBox: '0 0 18 18',
    children: `
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.14631 0.634264C2.90846 0.226662 3.65813 0.0999985 5.22778 0.0999985H7.1C7.59706 0.0999985 8 0.502942 8 0.999998C8 1.49705 7.59706 1.9 7.1 1.9H5.22778C3.74111 1.9 3.35717 2.02794 2.99519 2.22153C2.65934 2.40114 2.40115 2.65934 2.22154 2.99518C2.02795 3.35717 1.90001 3.7411 1.90001 5.22777V12.7722C1.90001 14.2589 2.02795 14.6428 2.22154 15.0048C2.40115 15.3407 2.65934 15.5989 2.99519 15.7785C3.35717 15.9721 3.74111 16.1 5.22778 16.1H12.7722C14.2589 16.1 14.6428 15.9721 15.0048 15.7785C15.3407 15.5989 15.5989 15.3407 15.7785 15.0048C15.9721 14.6428 16.1 14.2589 16.1 12.7722V10.9C16.1 10.4029 16.5029 9.99999 17 9.99999C17.4971 9.99999 17.9 10.4029 17.9 10.9V12.7722C17.9 14.3419 17.7733 15.0915 17.3657 15.8537C17.0184 16.5032 16.5032 17.0184 15.8537 17.3657C15.0915 17.7733 14.3419 17.9 12.7722 17.9H5.22778C3.65813 17.9 2.90847 17.7733 2.14631 17.3657C1.49678 17.0184 0.981645 16.5032 0.634272 15.8537C0.226669 15.0915 0.100006 14.3419 0.100006 12.7722V5.22777C0.100006 3.65812 0.226669 2.90846 0.634272 2.14631C0.981645 1.49678 1.49678 0.981637 2.14631 0.634264Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11 0.999998C11 0.502942 11.403 0.0999985 11.9 0.0999985H17C17.4971 0.0999985 17.9 0.502942 17.9 0.999998V6.1C17.9 6.59705 17.4971 7 17 7C16.503 7 16.1 6.59705 16.1 6.1V3.17279L9.53643 9.73639C9.18496 10.0879 8.61511 10.0879 8.26363 9.73639C7.91216 9.38492 7.91216 8.81507 8.26363 8.4636L14.8272 1.9H11.9C11.403 1.9 11 1.49705 11 0.999998Z'
        fill='white'
      />
  `,
  });
}

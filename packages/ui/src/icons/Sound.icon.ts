import { Icon, IconProps } from './Icon';

export function SoundIcon(props: IconProps) {
  return Icon({
    ...props,
    viewBox: '0 0 21 18',
    children: `
      <path
        d='M12 0C12.5523 0 13 0.447715 13 1V17C13 17.5523 12.5523 18 12 18C11.3585 18 10.7422 17.7509 10.2808 17.3052L4.79013 12H2C0.89543 12 0 11.1046 0 10V8C0 6.89543 0.89543 6 2 6H4.765L10.2794 0.693397C10.7417 0.248517 11.3584 0 12 0ZM17.3841 3.34315C17.7355 2.99168 18.3054 2.99168 18.6569 3.34315C21.781 6.46734 21.781 11.5327 18.6569 14.6569C18.3054 15.0083 17.7355 15.0083 17.3841 14.6569C17.0326 14.3054 17.0326 13.7355 17.3841 13.3841C19.8053 10.9628 19.8053 7.03719 17.3841 4.61594C17.0326 4.26447 17.0326 3.69462 17.3841 3.34315ZM14.8385 5.88873C15.1899 5.53726 15.7598 5.53726 16.1113 5.88873C17.8296 7.60703 17.8296 10.393 16.1113 12.1113C15.7598 12.4627 15.1899 12.4627 14.8385 12.1113C14.487 11.7598 14.487 11.1899 14.8385 10.8385C15.8538 9.82311 15.8538 8.17688 14.8385 7.16152C14.487 6.81005 14.487 6.2402 14.8385 5.88873Z'
        fill='white'
      />
  `,
  });
}

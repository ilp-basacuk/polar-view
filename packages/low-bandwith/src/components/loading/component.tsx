
import { FunctionalComponent, h } from 'preact';

interface LoadingProps {
  visible: boolean;
  className?: string;
  iconClassName?: string;
}

const Loading: FunctionalComponent<LoadingProps> = ({
  visible,
  className,
  iconClassName
}: LoadingProps) => {
  if (!visible) return null;

  return (
    <div
      key="loading"
      className={className}
    >
      <svg width="135" height="140" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="#fff" className={iconClassName}>
        <rect y="10" width="15" height="120" className='fill-mainblue'>
          <animate attributeName="height"
            begin="0.5s" dur="1s"
            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
            repeatCount="indefinite" />
          <animate attributeName="y"
            begin="0.5s" dur="1s"
            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
            repeatCount="indefinite" />
        </rect>
        <rect x="30" y="10" width="15" height="120" className='fill-mainblue'>
          <animate attributeName="height"
            begin="0.25s" dur="1s"
            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
            repeatCount="indefinite" />
          <animate attributeName="y"
            begin="0.25s" dur="1s"
            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
            repeatCount="indefinite" />
        </rect>
        <rect x="60" width="15" height="140" className='fill-mainblue'>
          <animate attributeName="height"
            begin="0s" dur="1s"
            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
            repeatCount="indefinite" />
          <animate attributeName="y"
            begin="0s" dur="1s"
            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
            repeatCount="indefinite" />
        </rect>
        <rect x="90" y="10" width="15" height="120" className='fill-mainblue'>
          <animate attributeName="height"
            begin="0.25s" dur="1s"
            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
            repeatCount="indefinite" />
          <animate attributeName="y"
            begin="0.25s" dur="1s"
            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
            repeatCount="indefinite" />
        </rect>
        <rect x="120" y="10" width="15" height="120" className='fill-mainblue'>
          <animate attributeName="height"
            begin="0.5s" dur="1s"
            values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
            repeatCount="indefinite" />
          <animate attributeName="y"
            begin="0.5s" dur="1s"
            values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
            repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
}


export default Loading;
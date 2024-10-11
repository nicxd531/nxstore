import {
    Notification as RsNotification,
    useToaster,
    ButtonToolbar,
    SelectPicker,
    Button,
  } from "rsuite";
 export  const ShowToast = (type, message) => {
    const toaster = useToaster();
    toaster.push(
      <RsNotification type={type} header={type.toUpperCase()}>
        <p>{message}</p>
      </RsNotification>,
      { placement: 'topEnd' }
    );
  };
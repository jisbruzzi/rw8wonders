import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const CardForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.card?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.card?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="colorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color id
        </Label>
        
          <NumberField
            name="colorId"
            defaultValue={props.card?.colorId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="colorId" className="rw-field-error" />

        <Label
          name="unlocksUnlockIconId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Unlocks unlock icon id
        </Label>
        
          <NumberField
            name="unlocksUnlockIconId"
            defaultValue={props.card?.unlocksUnlockIconId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="unlocksUnlockIconId" className="rw-field-error" />

        <Label
          name="unlockedByUnlockIconId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Unlocked by unlock icon id
        </Label>
        
          <NumberField
            name="unlockedByUnlockIconId"
            defaultValue={props.card?.unlockedByUnlockIconId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="unlockedByUnlockIconId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CardForm

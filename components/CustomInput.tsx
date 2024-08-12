import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

const CustomInput = ({form, name, label, placeholder, type}) => {
  return (
    <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
       <div className='form-item'>
            <FormLabel className='form-label'>
                {label}
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input 
                        placeholder={placeholder}
                        className='input-class'
                        type={type}
                        {...field}
                        />
                    </FormControl>
                    <FormMessage className='form-message mt-2'>

                    </FormMessage>
                </div>
            </FormLabel>
       </div>
    )}
    />

  )
}

export default CustomInput
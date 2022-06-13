<?php

namespace App\Http\Requests\addmonitor;

use Illuminate\Foundation\Http\FormRequest;

class reqmonitorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ispSelect' => 'required',
            'interTime' => 'required',
            'fetchType' => 'required'
        ];
    }
}

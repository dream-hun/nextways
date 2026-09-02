<x-mail::message>
# New website inquiry

**Name:** {{ $inquiry['fullName'] }}  
**Organization:** {{ $inquiry['organization'] }}  
**Email:** {{ $inquiry['email'] }}  
**Phone:** {{ $inquiry['phone'] ?: 'Not provided' }}  
**Area of interest:** {{ $inquiry['interest'] }}  
**Project location:** {{ $inquiry['location'] ?: 'Not provided' }}

## Project brief

{{ $inquiry['message'] }}

Reply directly to this email to contact {{ $inquiry['fullName'] }}.
</x-mail::message>

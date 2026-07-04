; AVIS-ARTIFACT
; Filename: prime_debug.asm
; ROLE: DEBUGGING HANDLER
; ENGINE: AVIS
; STATUS: ACTIVE

; ============================================================
; Prime Agent Debugging Module
; ============================================================

section .data
    debug_msg db "Prime Debug Active", 0xA, 0
    debug_len equ $ - debug_msg

    error_msg db "Prime Error Detected", 0xA, 0
    error_len equ $ - error_msg

section .bss
    debug_state resd 1
    error_code resd 1

section .text
    global prime_debug

prime_debug:
    ; Initialize debug state
    mov dword [debug_state], 0

    ; Print debug activation message
    mov eax, 4           ; sys_write
    mov ebx, 1           ; stdout
    mov ecx, debug_msg
    mov edx, debug_len
    int 0x80

    ; Simulate error detection
    mov dword [error_code], 1

    ; If error_code != 0, print error message
    cmp dword [error_code], 0
    je .no_error

    mov eax, 4           ; sys_write
    mov ebx, 1           ; stdout
    mov ecx, error_msg
    mov edx, error_len
    int 0x80

.no_error:
    ret

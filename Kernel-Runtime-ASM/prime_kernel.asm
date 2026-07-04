; AVIS-ARTIFACT
; Filename: prime_kernel.asm
; ROLE: KERNEL INITIALIZATION
; ENGINE: AVIS
; STATUS: ACTIVE

; ============================================================
; Prime Agent Kernel Initialization
; ============================================================

section .data
    kernel_state db 0
    kernel_msg db "Prime Kernel Initialized", 0

section .bss
    runtime_buffer resb 256

section .text
    global _start

_start:
    ; Initialize kernel state
    mov byte [kernel_state], 1

    ; Print initialization message
    mov eax, 4          ; sys_write
    mov ebx, 1          ; stdout
    mov ecx, kernel_msg
    mov edx, 24
    int 0x80

    ; Call runtime loop
    call prime_loop

    ; Exit cleanly
    mov eax, 1          ; sys_exit
    xor ebx, ebx
    int 0x80

; ============================================================
; External References
; ============================================================
extern prime_loop

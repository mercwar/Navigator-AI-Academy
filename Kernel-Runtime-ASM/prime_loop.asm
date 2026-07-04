; AVIS-ARTIFACT
; Filename: prime_loop.asm
; ROLE: KERNEL LOOP HANDLER
; ENGINE: AVIS
; STATUS: ACTIVE

; ============================================================
; Prime Agent Kernel Loop
; ============================================================

section .text
    global prime_loop

prime_loop:
    ; Initialize loop counter
    mov ecx, 10          ; run 10 iterations

.loop_start:
    ; Print loop iteration message
    push ecx
    mov eax, 4           ; sys_write
    mov ebx, 1           ; stdout
    mov ecx, loop_msg
    mov edx, loop_len
    int 0x80
    pop ecx

    ; Perform runtime state update
    call prime_state

    ; Decrement counter and continue if not zero
    loop .loop_start

    ret

; ============================================================
; External References
; ============================================================
extern prime_state

section .data
    loop_msg db "Prime Loop Iteration", 0xA, 0
    loop_len equ $ - loop_msg
